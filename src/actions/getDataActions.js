import {FETCH_USER_INFO} from "./types";
import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import $ from 'jquery';

/**
 * Redux function or fetching users information
 * @returns {function(...[*]=)}
 */
export const fetchUserInfo = () => async dispatch => {

    // URL
    const URL = "https://api-qa.goopter.com/api/rest/v7/customerinfo";

    // Method
    const method = "GET";

    // OAuth initialize
    const oauth = new OAuth({
        consumer: {
            key: '8fb7ec71f8b4e1f2ec28d2f8c3f7785a',
            secret: 'af035f0f340e090d5b51870f9a168acd',
        },
        signature_method: 'HMAC-SHA1',
        hash_function(base_string, key){
            return crypto
                .createHmac('sha1', key)
                .update(base_string)
                .digest('base64')
        },
    });

    // Get access token from the local storage
    let token = {
        key:  localStorage.getItem("token"),
        secret: localStorage.getItem("key"),
    };

    // auth request
    let auth_request = {
        url: URL,
        method: method
    };

    let RC = 0;

    // ajax function, get user_info from records
    $.ajax({
        url: URL,
        type: method,
        headers: oauth.toHeader(oauth.authorize(auth_request, token)),
        error: function (json) {
            /**
             * when the status text is error which means the API refused the token and key (401)
             * Then, come back to login
             */
            if(json.statusText === 'error'){
                alert("Invalid Token");
                localStorage.clear();
                window.location = "/"
            }else {
                setTimeout(function () {
                    alert("Another issue happened");
                    localStorage.clear();
                    window.location = '/';
                })
            }
        },
        success: function (json) {
            /**
             * If the RC equals to 200, then get the correct information
             */
            if(json.RC === 200){
                dispatch({
                    type: FETCH_USER_INFO,
                    user_info: json.records

                });
            }

            /**
             * When the API response is 401, then go back to login
             */
            else if(json.RC === 401){
                localStorage.clear();
                window.location = '/';
            }
            /**
             * For the other issues, this situation commonly on the timed out, which means the localStorage has been cleared
             * Then back to the login
             */
            else {
                alert("Another Issue Happened");
            }
        }.bind(this)
    });

};
