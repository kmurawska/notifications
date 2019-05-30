import React from 'react';
import Typography from "@material-ui/core/es/Typography/Typography";

export default class NotificationList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isEmpty) {
            return <div className='notification' style={{textAlign: 'center'}}>
                <Typography variant="subtitle2" style={{padding: '5px'}}>Nothing to display...</Typography>
            </div>
        }

        return (
            <div>
                <Typography variant="subtitle2" style={{padding: '5px'}}>Notification 1</Typography>
                <Typography variant="subtitle2" style={{padding: '5px'}}>Notification 2</Typography>
            </div>
        )
    }
}