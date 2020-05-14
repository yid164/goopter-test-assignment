import React from "react";
import PropTypes from 'prop-types'
import { fetchAccess } from '../actions/loginActions'
import { connect } from "react-redux";


class Login extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: "",
            key: ""
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.assignEmail = this.assignEmail.bind(this);
        // this.assignPassword = this.assignPassword.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value.toString()});
    }

    async onSubmit(e){
        e.preventDefault();
        let userInfo = {
            "data":{
                "email":this.state.email,
                "password":this.state.password,
            }
        };
        this.props.fetchAccess(userInfo);
    }


    // async handleSubmit(event){
    //
    //     event.preventDefault();
    //     console.log(this.state);
    //     const email = this.state.email;
    //     const password = this.state.password;
    //     const LOGIN_URL = "https://api-qa.goopter.com/api/rest/v8/login";
    //
    //     let dataBody = {
    //         "data": {
    //             "email":email,
    //             "password":password
    //         }
    //     };
    //
    //     let request = {
    //         method: "POST",
    //         headers: {
    //             "Accept": "application/json",
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(dataBody)
    //     };
    //
    //     await fetch(LOGIN_URL, request)
    //         .then(response => response.json())
    //         .then(
    //             (result)=>{
    //                 //console.log(result);
    //                 if(result.RC === 200){
    //                     this.setState({token: result.records.token, key: result.records.secret});
    //                     //this.passTokenKey();
    //                     window.location = '/' + result.records.token + '/' + result.records.secret;
    //                     alert("Login Success")
    //                 }else{
    //                     alert("Login Fail");
    //                     return;
    //                 }
    //                  console.log(this.state);
    //             },
    //             (error)=>{
    //                 console.log(error);
    //             }
    //             );
    // };
    //
    // assignEmail(event){
    //     event.preventDefault();
    //     const email = event.target.value;
    //     console.log(email);
    //     this.setState({
    //         email: email
    //     })
    //
    // };
    //
    //
    // assignPassword(event){
    //     event.preventDefault();
    //     const password = event.target.value;
    //     this.setState({
    //         password: password
    //     })
    // };


    render() {
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Email Address:</label>
                        <br />
                        <input
                            type={"email"}
                            name={"email"}
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Password: </label>
                        <br />
                        <input
                            type={"password"}
                            name={"password"}
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                    >Login</button>
                </form>
            </div>
        )
        // const layout = {
        //     labelCol: {
        //         span: 8,
        //     },
        //     wrapperCol: {
        //         span: 7,
        //     },
        // };
        // const tailLayout = {
        //     wrapperCol: {
        //         offset: 8,
        //         span: 7,
        //     },
        // };
        //
        // const onFinish = values => {
        //     console.log('Success:', values);
        // };
        //
        // const onFinishFailed = errorInfo => {
        //     console.log('Failed:', errorInfo);
        // };
        //
        // return(
        //     <Form
        //         {...layout}
        //         name="basic"
        //         initialValues={{
        //             remember: true,
        //         }}
        //         onFinish={onFinish}
        //         onFinishFailed={onFinishFailed}
        //         title="Please Log In"
        //     >
        //         <Form.Item>
        //             Please Log In
        //         </Form.Item>
        //         <Form.Item
        //             label="Email"
        //             name="email"
        //             rules={[
        //                 {
        //                     required: true,
        //                     message: 'Please input your username!',
        //                 },
        //             ]}
        //         >
        //             <Input value={this.state.email} onChange={this.assignEmail}/>
        //         </Form.Item>
        //
        //         <Form.Item
        //             label="Password"
        //             name="password"
        //             rules={[
        //                 {
        //                     required: true,
        //                     message: 'Please input your password!',
        //                 },
        //             ]}
        //
        //         >
        //             <Input.Password value={this.state.password} onChange={this.assignPassword}/>
        //         </Form.Item>
        //
        //         <Form.Item {...tailLayout}>
        //             <Button type="primary" htmlType="submit" onClick={this.handleSubmit}>
        //                 Submit
        //             </Button>
        //         </Form.Item>
        //     </Form>

    }
}

Login.propTypes = {
    fetchAccess: PropTypes.func.isRequired
};

export default connect(null, { fetchAccess })(Login);
