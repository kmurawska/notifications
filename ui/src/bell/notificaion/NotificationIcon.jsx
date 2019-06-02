import React from 'react';
import Error from "@material-ui/icons/Error";
import Warning from "@material-ui/icons/Warning";
import Info from "@material-ui/icons/esm/Info";
import orange from "@material-ui/core/es/colors/orange";
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

export default class NotificationIcon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.level === 'ERROR') {
            return <Error style={{color: red[500]}}/>
        }
        if (this.props.level === 'WARNING') {
            return <Warning style={{color: orange[500]}}/>
        }
        return <Info style={{color: green[500]}}/>
    }
}