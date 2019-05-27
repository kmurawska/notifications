package com.kmurawska.notifications;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class NotificationsController {
    @RequestMapping(value = "/")
    public String index() {
        return "index.html";
    }
}
