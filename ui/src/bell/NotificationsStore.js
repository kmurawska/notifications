class NotificationsStore {
    constructor() {
        this.stateAwareComponents = [];
        this.state = {
            notifications: []
        };
        this.subscribeToNotifications();
    }

    subscribeToNotifications() {
        let webSocket = new WebSocket("ws://localhost:8081/notification-channel");
        webSocket.onmessage = event => {
            this.handleNotification(event.data)
        }
    }

    handleNotification(notification) {
        this.state.notifications.unshift(JSON.parse(notification));
        this.refreshStateAwareComponents();
    }

    registerStateAwareComponent(component) {
        component.state = {...this.state};
        this.stateAwareComponents.push(component);
    }

    unregisterStateAwareComponent(component) {
        this.stateAwareComponents = this.stateAwareComponents.filter((c) => {
            if (c !== component) {
                return c;
            }
        });
    }

    refreshStateAwareComponents() {
        this.stateAwareComponents.forEach((c) => {
            c.setState(this.calculateNewStateFor(c));
        });
    }

    calculateNewStateFor(component) {
        let newState = {...component.state};
        Object.keys(this.state).map((k) => {
            newState[k] = this.state[k];
        });
        return newState;
    }

    numberOfNotifications() {
        return this.state.notifications.length;
    }

    isEmpty() {
        return this.state.notifications.length === 0;
    }

    markAsRead(notification) {
        this.state.notifications = this.state.notifications.filter(n => n !== notification);
        this.refreshStateAwareComponents();
    }
}

export let notificationStore = new NotificationsStore();

