import React from "react";
import PropTypes from 'prop-types'
import { fetchUserInfo } from '../actions/getDataActions'
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import Logout from "./Logout";
import UpdateForm from "./UpdateForm";


class PersonalPages extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.fetchUserInfo();
    }


    render() {
        console.log(this.props.user_info);
        return(
            <div>
                <h1>Personal Information</h1>
                <form>
                    <div>
                        <label>First Name</label>
                        <br />
                        <label>{this.props.user_info.first_name}</label>
                    </div>
                    <br />
                    <div>
                        <label>Nick Name</label>
                        <br />
                        <label>{this.props.user_info.nick_name}</label>
                    </div>
                    <br />
                    <div>
                        <label>Phone</label>
                        <br />
                        <label>{this.props.user_info.phone}</label>
                    </div>
                    <br />
                    <div>
                        <label>Phone Country Code</label>
                        <br />
                        <label>{this.props.user_info.phone_country_code}</label>
                    </div>
                    <br />
                    <div>
                        <label>Currency</label>
                        <br />
                        <label>{this.props.user_info.currency}</label>
                    </div>
                    <div>
                        <label>Country</label>
                        <br />
                        <label>{this.props.user_info.country}</label>
                    </div>
                    <div>
                        <UpdateForm></UpdateForm>
                    </div>
                    <div>
                        <Logout></Logout>
                    </div>
                </form>

                <br />

            </div>
        )
    }
}

PersonalPages.propTypes = {
    fetchUserInfo: PropTypes.func.isRequired,
    user_info: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    user_info: state.login.user_info,
});

export default connect(mapStateToProps,{fetchUserInfo})(PersonalPages);
