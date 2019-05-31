import React from 'react';
import NotificationIcon from "./NotificationIcon.jsx";

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <NotificationIcon level={this.props.notification.level}/>
            {this.props.notification.message}
        </div>
    }
}