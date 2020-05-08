import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

const Login = (props) => {
    const { auth, username, password, usernameChange, passwordChange, handleClick } = props;
    if (auth){
        return <Redirect to='/update'  />
    } else {
        return (
            <div>
                <div>
                    <h3>Please Log in</h3>
                </div>
                <div>
                    <label>Username: </label>
                    <input value={username} onChange={usernameChange}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input value={password} onChange={passwordChange}/>
                </div>
                <button onClick={handleClick}>Submit</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        username: state.username,
        password: state.password
    }
}


const mapDispatchToProps = function(dispatch) {
    return {
        usernameChange(e) {
            const action = {
                type: 'change_username',
                value: e.target.value
            };
            dispatch(action)
        },
        passwordChange(e) {
            const action = {
                type: 'change_password',
                value: e.target.value
            };
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'login'
            };
            dispatch(action);
            console.log(window.history)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
