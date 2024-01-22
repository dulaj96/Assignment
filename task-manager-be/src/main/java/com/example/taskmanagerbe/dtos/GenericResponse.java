package com.example.taskmanagerbe.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class GenericResponse {
    private boolean success;

    public static GenericResponse SUCCESS() {
        return new GenericResponse(true);
    }
}
