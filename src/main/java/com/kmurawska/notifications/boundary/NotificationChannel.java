package com.kmurawska.notifications.boundary;

import com.google.gson.Gson;
import com.kmurawska.notifications.control.Notification;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;
import java.util.logging.Level;
import java.util.logging.Logger;

public class NotificationChannel extends TextWebSocketHandler {
    private final Logger LOGGER = Logger.getLogger(NotificationChannel.class.getName());
    private final Set<WebSocketSession> sessions = new CopyOnWriteArraySet<>();

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        super.afterConnectionEstablished(session);
        sessions.add(session);
    }

    public void publish(Notification notification) {
        sessions.forEach(s -> trySendTo(s, notification));
    }

    private void trySendTo(WebSocketSession session, Notification notification) {
        try {
            session.sendMessage(new TextMessage(new Gson().toJson(notification)));
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Unable to publish notification to client", e);
            throw new RuntimeException(e);
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        sessions.remove(session);
    }
}