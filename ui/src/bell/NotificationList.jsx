import React from 'react';
import {notificationStore} from "./NotificationsStore";
import Notification from "./Notification.jsx";
import EmptyNotificationList from "./EmptyNotificationList.jsx";

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
                {this.state.notifications.map(n => <Notification key={n.id} notification={n}/>)}
            </div>
        )
    }
}