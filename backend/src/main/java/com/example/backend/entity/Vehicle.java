package com.example.backend.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Vehicle {
    @Id
    private Long id;
    private String type;
    private boolean operational;
    // Getter for id
    public Long getId() {
        return id;
    }

    // Setter for id
    public void setId(Long id) {
        this.id = id;
    }

    // Getter for type
    public String getType() {
        return type;
    }

    // Setter for type
    public void setType(String type) {
        this.type = type;
    }

    // Getter for operational
    public boolean isOperational() {
        return operational;
    }

    // Setter for operational
    public void setOperational(boolean operational) {
        this.operational = operational;
    }
}
