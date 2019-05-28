import React from 'react';

export default class NotificationBell extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <li style={{position: "static"}}>
            <a style={{cursor: "pointer"}}>
                <div></div>
            </a>
        </li>
    }
}