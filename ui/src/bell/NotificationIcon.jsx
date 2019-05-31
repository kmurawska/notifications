import React from 'react';
import Error from "@material-ui/icons/Error";
import Warning from "@material-ui/icons/Warning";
import Info from "@material-ui/icons/esm/Info";

export default class NotificationIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.level === 'ERROR') {
            return <Error/>
        }
        if (this.props.level === 'WARNING') {
            return <Warning/>
        }
        return <Info/>
    }
}