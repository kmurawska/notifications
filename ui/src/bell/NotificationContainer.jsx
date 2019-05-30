import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";
import NotificationList from "./NotificationList.jsx";
import Divider from "@material-ui/core/es/Divider/Divider";

export default class NotificationContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div style={{minWidth: '400px', minHeight: '100px'}}>
            <Typography variant="h6" style={{textAlign: 'center', marginTop: '15px'}}>Notifications</Typography>
            <Divider variant="middle" light={false} style={{marginTop: '10px', marginBottom: '10px'}}/>
            <NotificationList isEmpty={false}/>
        </div>
    }
}