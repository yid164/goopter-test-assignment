import {FETCH_USER_INFO, UPDATE_USER} from "./types";
import React from "react";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import $ from "jquery";

export const updateData = updateData => async dispatch =>{
    const URL = "https://api-qa.goopter.com/api/rest/v7/customerinfo";

    const method = "POST";


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
        data: JSON.stringify(updateData),
        contentType: "application/json",
        headers: oauth.toHeader(oauth.authorize(auth_request, token)),
        error: function (json) {
            setTimeout(function () {
                window.location = "/"
            }, 1000);
            return;
        },
        success: function (json) {
            let code = json.toString();
            console.log(code);
            if(code === "{\"RC\":200}"){
                alert("Information Updated");
                dispatch({
                    type: UPDATE_USER,

                });
                window.location.reload();
            }else {
                alert("Woo, Something wrong here");
                console.log(JSON.stringify(JSON.parse(json)));
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
                return;
            }
        }.bind(this)
    });
};
