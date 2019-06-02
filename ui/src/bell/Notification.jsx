import React from 'react';
import SnackbarContent from "@material-ui/core/es/SnackbarContent/SnackbarContent";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import NotificationMessage from "./NotificationMessage.jsx";
import {notificationStore} from "./NotificationsStore";

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        notificationStore.registerStateAwareComponent(this);
    }

    render() {
        return <SnackbarContent style={{backgroundColor: 'white', color: 'black', margin: '15px'}}
                                message={
                                    <NotificationMessage notification={this.props.notification}/>
                                }
                                action={[
                                    <IconButton key="close" aria-label="Close" color="inherit" onClick={() => this.markAsRead()}>
                                        <CloseIcon/>
                                    </IconButton>
                                ]}
        />
    };

    markAsRead() {
        notificationStore.markAsRead(this.props.notification);
    }
}