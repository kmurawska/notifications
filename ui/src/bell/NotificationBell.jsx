import React from 'react';
import Notifications from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/es/Badge/Badge";
import Popover from "@material-ui/core/es/Popover/Popover";
import NotificationContainer from "./NotificationContainer.jsx";
import {notificationStore} from "./NotificationsStore.js";

export default class NotificationBell extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
        notificationStore.registerStateAwareComponent(this);
        this.initInternalComponentState();
        this.test();
    }

    initInternalComponentState() {
        this.state['isOpen'] = false;
        this.state['anchor'] = null;
    }

    test() {
        let webSocket = new WebSocket("ws://localhost:8081/myHandler");
        webSocket.onmessage = function (event) {
            console.log(event);
        };
    }

    render() {
        return (
            <div>
                <a style={{cursor: "pointer"}} className="no-right-padding" onClick={this.onClick}>
                    <Badge badgeContent={notificationStore.numberOfNotifications()} color="primary">
                        <Notifications/>
                    </Badge>
                </a>
                <Popover open={this.state.isOpen}
                         anchorEl={this.state.anchor}
                         onClose={this.onClose}
                         anchorOrigin={{vertical: 'center', horizontal: 'right'}}
                         transformOrigin={{vertical: 'top', horizontal: 'left'}}>
                    <NotificationContainer/>
                </Popover>
            </div>
        )
    }

    onClick(event) {
        this.setState({
            isOpen: true,
            anchor: event.currentTarget
        });
    }

    onClose() {
        this.setState({
            isOpen: false,
            anchor: null
        });
    }

    componentWillUnmount() {
        notificationStore.unregisterStateAwareComponent(this);
    }
}