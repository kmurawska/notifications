import React from 'react';
import Notifications from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/es/Badge/Badge";
import Popover from "@material-ui/core/es/Popover/Popover";
import NotificationContainer from "./NotificationContainer.jsx";

export default class NotificationBell extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.state = {
            isOpen: false,
            anchor: null,
            isEmpty: false
        };
    }

    render() {
        return (
            <div>
                <a style={{cursor: "pointer"}} className="no-right-padding" onClick={this.onClick}>
                    <Badge badgeContent={4} color="primary">
                        <Notifications/>
                    </Badge>
                </a>
                <Popover open={this.state.isOpen}
                         anchorEl={this.state.anchor}
                         onClose={this.onClose}
                         anchorOrigin={{vertical: 'center', horizontal: 'right'}}
                         transformOrigin={{vertical: 'top', horizontal: 'left'}}>
                        <NotificationContainer isEmpty={this.state.isEmpty}/>
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
}