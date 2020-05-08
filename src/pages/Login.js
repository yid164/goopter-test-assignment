import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 7,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 7,
    },
};

const onFinish = values => {
    console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const Login = (props) => {
    const { auth, username, password, usernameChange, passwordChange, handleClick } = props;
    if (auth){
        return <Redirect to='/update'  />
    } else {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                title="Please Log In"
            >
                <Form.Item>
                    Please Log In
                </Form.Item>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                    value={username}
                    onChange={usernameChange}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    value={password}
                    onChange={passwordChange}

                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={handleClick} >
                        Submit
                    </Button>
                </Form.Item>
            </Form>

            // <div>
            //     <div>
            //         <h3>Please Log in</h3>
            //     </div>
            //     <div>
            //         <label>Username: </label>
            //         <input value={username} onChange={usernameChange}/>
            //     </div>
            //     <div>
            //         <label>Password: </label>
            //         <input value={password} onChange={passwordChange}/>
            //     </div>
            //     <button onClick={handleClick}>Submit</button>
            // </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        username: state.username,
        password: state.password
    }
};


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
        handleClick(e) {
            const action = {
                type: 'login'
            };
            dispatch(action);


        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
