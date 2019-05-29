import React from 'react';
import Notifications from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/es/Badge/Badge";

export default class NotificationBell extends React.Component {
    render() {
        return (
            <a style={{cursor: "pointer"}} className="no-right-padding" onClick={this.openNotifications}>
                <Badge badgeContent={4} color="primary">
                    <Notifications/>
                </Badge>
            </a>
        )
    }

    openNotifications() {
        console.log("A")
    }
}