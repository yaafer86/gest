package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VehicleController {
    @GetMapping("/api/vehicles")
    public String getVehicles() {
        return "List of vehicles";
    }
}
