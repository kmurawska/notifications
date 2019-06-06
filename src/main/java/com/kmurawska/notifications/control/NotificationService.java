package com.kmurawska.notifications.control;

import com.kmurawska.notifications.boundary.NotificationChannel;
import org.springframework.stereotype.Component;

@Component
public class NotificationService {
    private final NotificationChannel notificationChannel;

    public NotificationService(NotificationChannel notificationChannel) {
        this.notificationChannel = notificationChannel;
    }

    public void send(Notification notification) {
        notificationChannel.broadcastToClients(notification);
    }
}
