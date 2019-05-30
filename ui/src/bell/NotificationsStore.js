export default class NotificationsStore {
    constructor(component) {
        this.component = component;
        this.isOpen = false;
        this.component.state = {
            isOpen: this.isOpen,
        };
    }
}