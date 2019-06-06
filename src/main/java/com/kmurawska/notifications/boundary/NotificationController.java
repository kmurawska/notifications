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
        notificationService.send(new Notification(Level.INFO, UUID.randomUUID().toString()));
    }

}
