import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import request from "request"

// const email = '7788758095@c.goopter.com';
// const password = '20200506';

const login_info = {
    email: String,
    password: String,
    access_token: String,
    access_key: String,
    auth: Boolean,
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




function postTokenAndAccessSecret(email, password) {
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
    oauth.authorize(data, null);
    request({
        url: data.url,
        method: data.method,
        json: oauth.authorize(data, null),
    }, function (err, res, body){
        console.log(body);
        let value = JSON.parse(JSON.stringify(body));
        console.log(value.RC);
        if(value.RC === '200'){
            login_info.auth = true;
            login_info.access_token = value.records.token;
            login_info.access_key = value.records.secret;
            return true;
        }else{
            login_info.auth = false;
            login_info.access_token = null;
            return false;
        }
    });

}

export const login = (username, password) =>postTokenAndAccessSecret;






