import {UPDATE_USER} from "./types";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import $ from "jquery";

/**
 * Redux function for updating the data (nick_name and first_name)
 * @param updateData
 * @returns {function(...[*]=)}
 */
export const updateData = updateData => async dispatch =>{

    // url
    const URL = "https://api-qa.goopter.com/api/rest/v7/customerinfo";

    // request method
    const method = "POST";

    // init Oath function
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

    // get storage access
    let token = {
        key: await localStorage.getItem("token"),
        secret: await localStorage.getItem("key"),
    };

    // auth request
    let auth_request = {
        url: URL,
        method: method
    };

    // ajax function to POST the data, and reload the window
    $.ajax({
        url: URL,
        type: method,
        data: JSON.stringify(updateData),
        contentType: "application/json",
        headers: oauth.toHeader(oauth.authorize(auth_request, token)),
        error: function (json) {
            /**
             * when update the status text is error which means the API refused the token and key (401)
             * Then, come back to login
             */
            if(json.statusText === 'error'){
                alert("Invalid Token");
                window.location = "/";
                localStorage.clear();
            }else {
                setTimeout(function () {
                    window.location = '/';
                    localStorage.clear();
                })
            }
        },
        success: function (json) {
            let code = json.toString();
            console.log(code);
            /**
             * If the RC equals to 200, update successful
             */
            if(code === "{\"RC\":200}"){
                alert("Information Updated");
                dispatch({
                    type: UPDATE_USER,

                });
                window.location.reload();

            }
            /**
             * If the RC equals to 400 which means the request is not valid
             * Return the invalid input, and reload the window
             */
            else if (code === "{\"RC\":400}"){
                alert("Invalid Input");
                window.location.reload();

            }

            /**
             * If the RC equals to 401 which means the token is invalid, clear the localstorage and back to login page
             */
            else if(code === "{\"RC\":401}"){
                alert("Invalid Token");
                localStorage.clear();
                window.location = '/';
            }
            /**
             * This fetch for taking the other issue, console log it and back to the login page
             */
            else{
                alert("Other Issue");
                console.log(JSON.stringify(JSON.parse(json)));
                setTimeout(function () {
                    localStorage.clear();
                    window.location = '/';
                }, 1000);
                localStorage.clear();
                window.location = '/';
            }
        }.bind(this)
    });
};
