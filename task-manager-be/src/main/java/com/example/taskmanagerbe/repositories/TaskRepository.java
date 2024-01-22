package com.example.taskmanagerbe.repositories;

import com.example.taskmanagerbe.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
