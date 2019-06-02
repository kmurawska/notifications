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
            id: 1,
            level: 'INFO',
            message: 'Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.',
            whenRecorded: '2014-02-27T23:03:14+05:30'
        });
        this.state.notifications.unshift({
            id: 2,
            level: 'WARNING',
            message: 'Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.',
            whenRecorded: '2014-02-27T23:03:14+05:30'
        });
        this.state.notifications.unshift({
            id: 3,
            level: 'ERROR',
            message: 'Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.',
            whenRecorded: '2014-02-27T23:03:14+05:30'
        });
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

