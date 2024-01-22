package com.example.taskmanagerbe.repositories;

import com.example.taskmanagerbe.entities.Task;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author danushka
 * 2024-01-21
 */
public interface TaskRepository extends JpaRepository<Task, Long> {
}
