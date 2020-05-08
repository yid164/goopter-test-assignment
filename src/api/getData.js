import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import request from "request"

const email = '7788758095@c.goopter.com';
const password = '20200506';



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

const request_data = {
    url: 'https://api-qa.goopter.com/api/rest/v8/login',
    method:'POST',
    data:
        {
            "data": {
                "email": email,
                "password" : password
            }
        }
};

function postToken() {
    oauth.authorize(request_data, null);
    request({
        url: request_data.url,
        method: request_data.method,
        json: oauth.authorize(request_data, null),
    }, function (err, res, body){
        console.log(body);
        let value = JSON.parse(JSON.stringify(body));
        console.log(value.records.token);
    });

}

function loginSuccess(){

}

 export const accessToken = () => postToken();



