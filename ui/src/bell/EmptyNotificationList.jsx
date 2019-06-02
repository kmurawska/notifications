import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";

export default class EmptyNotificationList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='notification' style={{textAlign: 'center'}}>
            <Typography variant="subtitle2" style={{padding: '5px'}}>Nothing to display...</Typography>
        </div>
    }
}