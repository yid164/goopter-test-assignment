import React from "react";
import PropTypes from 'prop-types'
import { fetchAccess } from '../actions/loginActions'
import { connect } from "react-redux";
import 'antd/dist/antd.css';


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

    onSubmit(e){
        e.preventDefault();
        let userInfo = {
            "data":{
                "email":this.state.email,
                "password":this.state.password,
            }
        };
        this.props.fetchAccess(userInfo);
    }



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

    }
}

Login.propTypes = {
    fetchAccess: PropTypes.func.isRequired
};


export default connect(null, { fetchAccess })(Login);
