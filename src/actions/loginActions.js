import {FETCH_USER_INFO} from "./types";
import {FETCH_ACCESS} from "./types";


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
                    alert(JSON.stringify(res));
                    if (res.RC === 200) {
                        alert("Login Success");
                        dispatch({
                            type: FETCH_ACCESS,
                            email: userInfo.data.email,
                            password: userInfo.data.password,
                            token: res.records.token,
                            key: res.records.secret
                        })
                    } else {
                        alert("Login Fail");
                        //return;
                    }
                }
                );
};
