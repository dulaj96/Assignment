package com.example.taskmanagerbe.dtos;

import com.example.taskmanagerbe.entities.Task;
import lombok.Data;

@Data
public class TaskProjection {
    private final long id;
    private final String name;
    private final String description;

    public TaskProjection(Task task) {
        this.id = task.getId();
        this.name = task.getName();
        this.description = task.getDescription();
    }
}
