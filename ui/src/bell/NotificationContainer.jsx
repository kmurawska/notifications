import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";
import NotificationList from "./NotificationList.jsx";
import Divider from "@material-ui/core/es/Divider/Divider";
import {notificationStore} from "./NotificationsStore";

export default class NotificationContainer extends React.Component {
    constructor(props) {
        super(props);
        notificationStore.registerStateAwareComponent(this);
    }

    render() {
        return <div style={{width: '500px', minHeight: '100px'}}>
            <Typography variant="h6" style={{textAlign: 'center', marginTop: '15px'}}>Notifications</Typography>
            <Divider variant="middle" light={false}/>
            <NotificationList isEmpty={notificationStore.isEmpty()}/>
        </div>
    }
}