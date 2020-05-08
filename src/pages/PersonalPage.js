import React from 'react';
import { connect } from 'react-redux';
import  { Redirect } from 'react-router-dom'

const UpdateProfile = (props) => {
    const { auth, nickname, first_name, last_name,
        nicknameChange, firstNameChange, lastNameChange,
        handleClick, handleRefresh } = props;
    if (!auth){
        return <Redirect to='/login'  />
    } else {
        return (
            <div>
                <div>
                    <h3>Welcome, {first_name}, {last_name}</h3>
                </div>
                <div>
                    <label>Nick Name: </label>
                    <input value={nickname} onChange={nicknameChange}/>
                </div>
                <div>
                    <label>First Name: </label>
                    <input value={first_name} onChange={firstNameChange}/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input value={last_name} onChange={lastNameChange}/>
                </div>

                <button onClick={handleClick}>Update</button>
                <button onClick={handleRefresh}>Refresh</button>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        nickname: state.nickname,
        first_name: state.first_name,
        last_name: state.last_name
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        nicknameChange(e) {
            const action = {
                type: 'change_nickname',
                value: e.target.value
            };
            dispatch(action)
        },
        firstNameChange(e) {
            const action = {
                type: 'change_first_name',
                value: e.target.value
            };
            dispatch(action)
        },
        lastNameChange(e){
            const action = {
                type: 'change_last_name',
                value: e.target.value
            };
            dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'update'
            };
            dispatch(action)
        },
        handleRefresh() {
            const action = {
                type: 'refresh'
            };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProfile);
