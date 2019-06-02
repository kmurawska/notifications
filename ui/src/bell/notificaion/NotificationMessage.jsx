import React from 'react';
import Grid from "@material-ui/core/es/Grid/Grid";
import NotificationIcon from "./NotificationIcon.jsx";
import Typography from "@material-ui/core/es/Typography/Typography";
import WhenRecorded from "./WhenRecorded.jsx";

export default class NotificationMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Grid container wrap="nowrap">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Grid item xs style={{paddingLeft: '2px', paddingRight: '2px'}}>
                        <NotificationIcon level={this.props.notification.level}/>
                    </Grid>
                </div>
                <Grid item xs style={{maxWidth: '300px'}}>
                    <Typography variant="body2">{this.props.notification.message}</Typography>
                    <div>
                        <WhenRecorded recordedAt={this.props.notification.whenRecorded}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    };
}