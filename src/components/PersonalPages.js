import React, {useState} from "react";
import crypto from "crypto";
import OAuth  from "oauth-1.0a";

class PersonalPages extends React.Component{
    constructor(props) {
        super(props);

        if(window.location.pathname === '/login/'){
            window.location = '/';
        }

        this.state = {
            nick_name: "",
            first_name: "",
            new_nick_name: "",
            new_first_name: ""
        }
    }
}
