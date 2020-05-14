import React from "react";
import PropTypes from 'prop-types'
import { fetchAccess } from '../actions/loginActions'
import { connect } from "react-redux";
import 'antd/dist/antd.css';

/**
 * Login component, a individual component for users login
 */
class Login extends React.Component{

    /**
     * Init
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * on change function to change the input
     * @param e
     */
    onChange(e){
        this.setState({[e.target.name]: e.target.value.toString()});
    }

    /**
     * Submit function to call the redux function
     * @param e
     */
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

    /**
     * Rendering
     * @returns {*}
     */
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
