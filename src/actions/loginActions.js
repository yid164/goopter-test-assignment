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
            // error=>{console.log(error)},
            res=> {
                /**
                 * If the RC equals to 200, success and jump to page
                 */
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

                }
                /**
                 * If the RC equals to 401 which means the token is invalid, try to clear the localstorage
                 */
                else if(res.RC === 401){
                    alert("Token is not valid");
                    localStorage.clear();
                }
                /**
                 * Other issue
                 */
                else {
                    alert("Please Enter Valid Email/Password");
                }

        });

};

