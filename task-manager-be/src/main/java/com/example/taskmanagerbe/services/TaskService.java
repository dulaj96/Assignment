package com.example.taskmanagerbe.services;

import com.example.taskmanagerbe.dtos.CreateTaskRequest;
import com.example.taskmanagerbe.dtos.GenericResponse;
import com.example.taskmanagerbe.dtos.TaskProjection;
import com.example.taskmanagerbe.dtos.UpdateTaskRequest;
import com.example.taskmanagerbe.entities.Task;
import com.example.taskmanagerbe.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepository;

    public List<TaskProjection> getAllTasks() {
        return taskRepository.findAll()
                .stream().map(TaskProjection::new)
                .toList();
    }

    public TaskProjection createTask(CreateTaskRequest request) {
        Task task = new Task(request.name(), request.description());
        task = taskRepository.save(task);
        return new TaskProjection(task);
    }

    public TaskProjection updateTask(UpdateTaskRequest request) {
        Task task = taskRepository.findById(request.id()).orElseThrow();
        task.setName(request.name());
        task.setDescription(request.description());
        task = taskRepository.save(task);
        return new TaskProjection(task);
    }

    public GenericResponse deleteTask(long id) {
        Task task = taskRepository.findById(id).orElseThrow();
        taskRepository.delete(task);
        return GenericResponse.SUCCESS();
    }
}
