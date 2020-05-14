import {FETCH_USER_INFO} from "./types";
import {FETCH_ACCESS} from "./types";
import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import $ from 'jquery';
import React from "react";
import store from "../store";
import {Redirect} from "react-router";


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
                        });
                        localStorage.setItem("token", res.records.token);
                        localStorage.setItem("key", res.records.secret);
                        window.location = ('/');

                    }else {
                        alert("Login Failed");
                    }

            });

};

