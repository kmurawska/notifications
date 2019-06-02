import React from 'react';
import ReactDOM from 'react-dom';
import theme from './theme';
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import Content from "./Content.jsx";

export default class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Content/>
            </MuiThemeProvider>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("container"));