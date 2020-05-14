import {FETCH_ACCESS} from "./types";
import React from "react";

/**
 * Redux function for auth user login, and fetching the access key and token to the local storage
 * @param userInfo
 * @returns {function(...[*]=)}
 */
export const fetchAccess = userInfo => dispatch => {

    fetch("https://api-qa.goopter.com/api/rest/v8/login",
        {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(
            //error=>{console.log(error)},
            res=> {
                if(res.RC === 200){
                    alert("Login Success");
                    dispatch({
                        type: FETCH_ACCESS,
                        email: userInfo.data.email,
                        password: userInfo.data.password,
                        token: res.records.token,
                        key: res.records.secret
                    });
                    localStorage.setItem("token", res.records.token);
                    localStorage.setItem("key", res.records.secret);
                    window.location = ('/page');

                }else {
                    alert("Login Failed");
                }

        });

};

