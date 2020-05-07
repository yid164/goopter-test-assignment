import React from "react";
import { Component } from "react"

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {};
        //this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        let {email, password} = this.state;
        let{isPending, isSuccess, isFail} = this.props;
        return(
            <form name="login" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={e=>this.setState({email: e.target.value})} value={email}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" onChange={e=>this.setState({password: e.target.value})} value={password}/>
                </div>

                <input type="submit" value="Login"/>

                <div className="message">
                    {isPending && <div><p>It's Processing</p></div>}
                    {isSuccess && <div><p>It's Succeed</p></div>}
                    {isFail && <div><p>It is Failed</p></div>}
                </div>
            </form>
        )
    }

}

export default Login
