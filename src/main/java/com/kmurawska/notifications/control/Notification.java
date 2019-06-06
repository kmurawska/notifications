package com.kmurawska.notifications.control;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.UUID;

public class Notification {
    private final UUID uuid;
    private final Level level;
    private final String message;
    private final ZonedDateTime recordedAt;

    public Notification(Level level, String message) {
        this.uuid = UUID.randomUUID();
        this.level = level;
        this.message = message;
        this.recordedAt = ZonedDateTime.now(ZoneId.of("UTC").normalized());
    }
}
