package com.kmurawska.notifications.boundary;

import com.kmurawska.notifications.control.Level;
import com.kmurawska.notifications.control.Notification;
import com.kmurawska.notifications.control.NotificationService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@Controller
public class NotificationController {
    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }

    @GetMapping("/test-notification")
    public void send() {
        Notification notification = new Notification(Level.INFO, UUID.randomUUID().toString());
        Notification notification2 = new Notification(Level.ERROR, "Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.");
        notificationService.publish(notification);
        notificationService.publish(notification2);
    }
}
