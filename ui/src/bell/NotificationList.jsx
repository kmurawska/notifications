import React from 'react';
import {notificationStore} from "./NotificationsStore";
import EmptyNotificationList from "./EmptyNotificationList.jsx";
import Notification from "./notificaion/Notification.jsx";

export default class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        notificationStore.registerStateAwareComponent(this);
    }

    render() {
        if (this.props.isEmpty) {
            return <EmptyNotificationList/>
        }

        return (
            <div>
                {this.state.notifications.map(n => <Notification key={n.uuid} notification={n}/>)}
            </div>
        )
    }

    componentWillUnmount() {
        notificationStore.unregisterStateAwareComponent(this);
    }
}