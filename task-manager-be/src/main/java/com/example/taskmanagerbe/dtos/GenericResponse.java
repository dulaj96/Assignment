package com.example.taskmanagerbe.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author danushka
 * 2024-01-21
 */
@AllArgsConstructor
@Data
public class GenericResponse {
    private boolean success;

    public static GenericResponse SUCCESS() {
        return new GenericResponse(true);
    }
}
