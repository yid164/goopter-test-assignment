import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import request from "request"

// const email = '7788758095@c.goopter.com';
// const password = '20200506';

let login_info = {
    email: '',
    password: '',
    access_token: '',
    access_key: '',
    auth: false,
    RC: 0
};

const user_info = {
    user_id: Number,
    first_name: String,
    nick_name: String,
    phone: String,
    phone_country_code: String,
    currency: String,
    points: Number,
    type: Number,
    is_confirm: Boolean,
    is_password_set: Boolean,
    defaultAddress: String,
    has_payment_password: Boolean,
    bookmark_store: Object,
    bookmark_group_sale: Object,
    bookmark_product: Object,
    num_gift_cards: Number,
};
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


const request_get_info_date = {
    url: 'https://api-qa.goopter.com/api/rest/v7/customerinfo',
    method: 'GET'
};

let getInformation = function(){
    let token = {
        key: login_info.access_key,
        secret: login_info.access_token,
    };

    let data ={

        url: 'https://api-qa.goopter.com/api/rest/v7/customerinfo',
        method: 'GET',
        data:
            {
                "data": {
                    "email": login_info.email,
                    "password": login_info.password
                }
            }
    };
    request({
        url: 'https://api-qa.goopter.com/api/rest/v7/customerinfo',
        method: 'GET',
        json: oauth.authorize(data, token)
    }, function(err, res, body) {
        console.log(body)
    })
};

let passEmail = function(email, password) {
    let data = {
        url: 'https://api-qa.goopter.com/api/rest/v8/login',
        method: 'POST',
        data:
            {
                "data": {
                    "email": email,
                    "password": password
                }
            }
    };
    login_info.email = email;
    login_info.password = password;
    request({
        url: data.url,
        method: data.method,
        json: oauth.authorize(data, null),
        }, function (err, res, body){
        //console.log(body);
        let value = JSON.parse(JSON.stringify(body));
        if(value.RC === 200){
            passingLogin(value);
        }else{
            console.log("no value");
        }

    });

};

function passingLogin (login_information) {
    login_info.access_token = login_information.records.token;
    login_info.access_key = login_information.records.secret;
    login_info.RC = login_information.RC;
    login_info.auth = true;
}

function isPassed(email, password) {
    passEmail(email,password);
    console.log(login_info);
    if(login_info.RC === 200){
        getInformation();
        return true;
    }else{
        return false;
    }
}

export const login = (u,p) => isPassed(u,p);






