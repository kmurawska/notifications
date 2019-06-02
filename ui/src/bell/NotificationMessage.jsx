import React from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import NotificationIcon from "./NotificationIcon.jsx";
import Typography from "@material-ui/core/es/Typography/Typography";

export default class NotificationMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{flexGrow: 1}}>
            <Grid container wrap="nowrap" spacing={2}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Grid item xs>
                        <NotificationIcon level={this.props.notification.level}/>
                    </Grid>
                </div>
                <Grid item xs style={{maxWidth: '300px'}}>
                    <Typography variant="body2">{this.props.notification.message}</Typography>
                </Grid>
            </Grid>
        </div>
    };
}