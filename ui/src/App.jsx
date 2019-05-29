import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import NotificationBell from "./bell/NotificationBell.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
                            Title
                        </Typography>
                        <NotificationBell/>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("container"));