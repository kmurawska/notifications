import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";
import Time from "@material-ui/icons/AccessTime";

import moment from "moment";

export default class WhenRecorded extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{textAlign: 'right'}}>
            <Typography variant="body2" style={{fontSize: '10px'}}>
                <Time style={{fontSize: '11px'}}/>&nbsp;{this.whenRecorded()}
                </Typography>
        </div>

    };

    whenRecorded() {
        let utcDate = moment.utc(this.props.recordedAt).toDate();
        let localDate = moment(utcDate).format('YYYY-MM-DD HH:mm:ss');
        return moment(localDate).fromNow();
    }
}