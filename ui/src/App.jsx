import React from 'react';
import ReactDOM from 'react-dom';
import NotificationBell from "./bell/NotificationBell.jsx";

export default class App extends React.Component {
    render() {
        return <NotificationBell/>
    }
}

ReactDOM.render(<App/>, document.getElementById("container"));