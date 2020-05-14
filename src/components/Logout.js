import React, {Component} from "react";
import 'antd/dist/antd.css';

/**
 * Logout button which is a children component in the personal page
 */
class Logout extends Component{
    constructor(props) {
        super(props);
        this.logoutClick = this.logoutClick.bind(this);
    }

    /**
     * clear the local storage
     * @param event
     */
    logoutClick(event){
        event.preventDefault();
        localStorage.clear();
        alert("You have sign out");
        window.location = '/';
    }

    render() {
        return (
            <div>
                <button onClick={this.logoutClick}>Logout</button>
            </div>
        )
    }
}

export default Logout;
