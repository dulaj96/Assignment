package com.example.taskmanagerbe.controllers;

import com.example.taskmanagerbe.dtos.GenericResponse;
import com.example.taskmanagerbe.dtos.UpdateTaskRequest;
import com.example.taskmanagerbe.dtos.CreateTaskRequest;
import com.example.taskmanagerbe.dtos.TaskProjection;
import com.example.taskmanagerbe.services.TaskService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author danushka
 * 2024-01-21
 */
@RestController
@RequestMapping("/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TaskController {
    private final TaskService taskService;
    @GetMapping
    public List<TaskProjection> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping
    public TaskProjection createTask(@RequestBody @Valid CreateTaskRequest request) {
        return taskService.createTask(request);
    }

    @PutMapping
    public TaskProjection updateTask(@RequestBody @Valid UpdateTaskRequest request) {
        return taskService.updateTask(request);
    }

    @DeleteMapping("{id}")
    public GenericResponse deleteTask(@PathVariable long id) {
        return taskService.deleteTask(id);
    }
}
