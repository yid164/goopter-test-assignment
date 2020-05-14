import React, {Component} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateData } from "../actions/postDataActions";
import 'antd/dist/antd.css';

/**
 * A children component in the Personal Page which for updating user's information
 */
class UpdateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            new_first_name : '',
            new_nick_name : ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * update the input
     * @param event
     */
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    /**
     * Submit and call the redux function
     * @param event
     */
    onSubmit(event) {
        event.preventDefault();

        const data = {
            first_name: this.state.new_first_name,
            nick_name: this.state.new_nick_name
        };

        this.props.updateData(data);
    }

    render() {
        return(
            <div>
                <h1>Update Your Information</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>New First Name: </label>
                        <br />
                        <input
                            type="text"
                            name="new_first_name"
                            onChange={this.onChange}
                            value={this.state.new_first_name}
                        />
                    </div>
                    <br />
                    <div>
                        <label>New Nick Name: </label>
                        <br />
                        <input
                            type="text"
                            name="new_nick_name"
                            onChange={this.onChange}
                            value={this.state.new_nick_name}
                        />
                    </div>
                    <br />
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }

}
UpdateForm.propTypes = {
    updateData: PropTypes.func.isRequired
};

export default connect(null, { updateData })(UpdateForm);
