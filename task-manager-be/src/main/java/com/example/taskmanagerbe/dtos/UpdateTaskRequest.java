package com.example.taskmanagerbe.dtos;

import jakarta.validation.constraints.NotNull;

public record UpdateTaskRequest(@NotNull long id, @NotNull String name, @NotNull String description) {
}
