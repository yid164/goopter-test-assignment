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
            new_nick_name : '',
            errors:{
                new_first_name: '',
                new_nick_name: ''
            }
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * update the input
     * @param event
     */
    onChange(event) {
        event.preventDefault();
        const {name, value} = event.target;
        const format = RegExp(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/);
        let errors = this.state.errors;
        switch (name) {
            case 'new_first_name':
                errors.new_first_name =
                    value.length < 1 || format.test(value)
                        ? 'Please enter valid first name!'
                        :'';
                break;
            case 'new_nick_name':
                errors.new_nick_name =
                    value.length < 1 || format.test(value)
                        ? 'Please enter valid nick name!'
                        :'';
                break;
            default:
                break;

        }
        this.setState({errors, [name]:value}, ()=>{
            console.log(errors)
        });
    }

    /**
     * Submit and call the redux function
     * @param event
     */
    onSubmit(event) {
        event.preventDefault();

        if(validateForm(this.state.errors))
        {
            console.log('Valid From');
            const data = {
                first_name: this.state.new_first_name,
                nick_name: this.state.new_nick_name
            };
            this.props.updateData(data);
        }else{
            alert("Please enter correct Nick Name or First Name");
            console.log('Invalid From');
        }
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

const validateForm =(errors)=> {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid=false)
    );
    console.log(valid);
    return valid;
};

export default connect(null, { updateData })(UpdateForm);
