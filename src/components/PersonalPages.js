import React, {useState} from "react";
import crypto from "crypto";
import OAuth  from "oauth-1.0a";
import $ from 'jquery';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

class PersonalPages extends React.Component{
    constructor(props) {
        super(props);
        console.log(window.location.pathname.split('/'));
        this.state = {
            first_name: "",
            nick_name: "",
            phone: "",
            phone_country_code: "",
            currency: "",
            country: "",
            change_first_name: "",
            change_nick_name: "",
            access_token: "",
            access_key: "",
        };


        // if(window.location.pathname !== '/'){
        //     window.location = '/';
        // }
        console.log(window.location.pathname);

        // this.changeFirstName = this.changeFirstName.bind(this);
        // this.changeNickName = this.changeNickName.bind(this);
        //this.componentDidMount = this.componentDidMount.bind(this);
    }

    setAccess(){
        let token = window.location.pathname.split('/')[1];
        let key = window.location.pathname.split('/')[2];
        this.setState({access_token: token,
        access_key: key});
        console.log(this.state);

    }

    componentWillMount(){

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


        const token = {
            key: window.location.pathname.split('/')[1],
            secret: window.location.pathname.split('/')[2]
        };

        const auth_request = {
            url: URL,
            method: method
        };

        console.log(this.state);
        $.ajax({
            url: URL,
            type: method,
            headers: oauth.toHeader(oauth.authorize(auth_request, token)),
            error: function (json) {
                alert(json.RC);
                setTimeout(function () {
                    //window.location = "/login/"
                }, 10000000);
                return;
            },
            success: function (json) {
                if(json.RC === 200){
                    this.setState({
                        first_name: json.records.first_name.toString(),
                        nick_name: json.records.nick_name.toString(),
                        phone: json.records.phone.toString(),
                        phone_country_code: json.records.phone_country_code.toString(),
                        currency: json.records.currency.toString(),
                        country: json.records.country.toString()

                    });
                    console.log(this.state)
                }else {
                    alert(json.RC);
                    setTimeout(function () {
                        window.location = "/login/"
                    }, 500);
                    return;
                }
            }.bind(this)
        });

    }

    render() {
        // const form = Form.useForm();
        // const formLayout = useState('horizontal');
        //
        //
        // const formItemLayout =
        //     formLayout === 'horizontal'
        //         ? {
        //             labelCol: {
        //                 span: 4,
        //             },
        //             wrapperCol: {
        //                 span: 14,
        //             },
        //         }
        //         : null;
        // const buttonItemLayout =
        //     formLayout === 'horizontal'
        //         ? {
        //             wrapperCol: {
        //                 span: 14,
        //                 offset: 4,
        //             },
        //         }
        //         : null;
        return(
            <div>
                <Form>
                    <Form.Item label="Personal:" name="layout">
                        Hello {this.state.nick_name}
                    </Form.Item>
                    <Form.Item label="First Name">
                        <Input placeholder={this.state.first_name} value={this.state.first_name}/>
                    </Form.Item>
                    <Form.Item label="Nick Name">
                        <Input placeholder={this.state.nick_name} value={this.state.nick_name} />
                    </Form.Item>
                    <Form.Item label="Phone Number:" name="layout">
                        {this.state.phone}
                    </Form.Item>
                    <Form.Item label="Country Code:" name="layout">
                        {this.state.phone_country_code}
                    </Form.Item>
                    <Form.Item label="Currency:" name="layout">
                        {this.state.currency}
                    </Form.Item>
                    <Form.Item label="Currency:" name="layout">
                        {this.state.currency}
                    </Form.Item>
                    <Form.Item label="Country:" name="layout">
                        {this.state.country}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">Submit</Button>
                        <Button type="warning">Log Out </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default PersonalPages;
