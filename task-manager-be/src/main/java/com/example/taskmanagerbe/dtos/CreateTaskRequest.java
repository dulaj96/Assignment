package com.example.taskmanagerbe.dtos;

import jakarta.validation.constraints.NotNull;

public record CreateTaskRequest(@NotNull String name, @NotNull String description) {
}
