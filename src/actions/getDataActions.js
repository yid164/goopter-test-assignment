import {FETCH_USER_INFO} from "./types";
import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import $ from 'jquery';

export const fetchUserInfo = () => async dispatch => {

    const URL = "https://api-qa.goopter.com/api/rest/v7/customerinfo";

    const method = "GET";


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


    let token = {
        key: await localStorage.getItem("token"),
        secret: await localStorage.getItem("key"),
    };

    let auth_request = {
        url: URL,
        method: method
    };

    $.ajax({
        url: URL,
        type: method,
        headers: oauth.toHeader(oauth.authorize(auth_request, token)),
        error: function (json) {
            setTimeout(function () {
                window.location = "/"
            }, 1000);
            return;
        },
        success: function (json) {
            if(json.RC === 200){
                //alert("infomation got");
                dispatch({
                    type: FETCH_USER_INFO,
                    user_info: json.records

                });
            }else {
                alert(json.RC);
                setTimeout(function () {
                    window.location = "/"
                }, 1000);
                return;
            }
        }.bind(this)
    });

};
