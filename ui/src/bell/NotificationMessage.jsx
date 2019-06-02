import React from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import NotificationIcon from "./NotificationIcon.jsx";
import Typography from "@material-ui/core/es/Typography/Typography";

export default class NotificationMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{flexGrow: 1, overflow: 'hidden', maxWidth: '400px'}}>
            <Grid container wrap="nowrap" spacing={2}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Grid item style={{marginLeft: '15px'}}>
                        <NotificationIcon level={this.props.notification.level}/>
                    </Grid>
                </div>
                <Grid item xs>
                    <Typography>{this.props.notification.message}</Typography>
                </Grid>
            </Grid>
        </div>
    };
}