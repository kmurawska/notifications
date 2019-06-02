class NotificationsStore {
    constructor() {
        this.stateAwareComponents = [];
        this.state = {
            notifications: []
        };
        this.initNotifications();
    }

    initNotifications() {
        this.state.notifications.unshift({
            id: 1234,
            level: 'ERROR',
            message: 'Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.'
        });
    }

    registerStateAwareComponent(component) {
        component.state = {...this.state};
        this.stateAwareComponents.push(component);
    }

    unregisterStateAwareComponent(component) {
        this.subscriber = this.subscriber.filter((c) => {
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

    isEmpty() {
        return this.state.notifications.length === 0;
    }

    markAsRead(notification) {
        this.state.notifications = this.state.notifications.filter(n => n !== notification);
        this.refreshStateAwareComponents();
    }
}

export let notificationStore = new NotificationsStore();

