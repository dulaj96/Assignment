package com.example.taskmanagerbe.dtos;

import jakarta.validation.constraints.NotNull;

/**
 * @author danushka
 * 2024-01-21
 */
public record CreateTaskRequest(@NotNull String name, @NotNull String description) {
}
