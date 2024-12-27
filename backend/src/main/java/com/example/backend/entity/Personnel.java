package com.example.backend.entity;

import com.google.common.collect.Tables;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
@Entity
@Table(name = "personnel")
public class Personnel {
    @Id
    private Long id;
    private String name;
    private String sex;
    private int age;
    private String speciality;
// Getter for id
public Long getId() {
    return id;
}

// Setter for id
public void setId(Long id) {
    this.id = id;
}

// Getter for name
public String getName() {
    return name;
}

// Setter for name
public void setName(String name) {
    this.name = name;
}

// Getter for sex
public String getSex() {
    return sex;
}

// Setter for sex
public void setSex(String sex) {
    this.sex = sex;
}

// Getter for age
public int getAge() {
    return age;
}

// Setter for age
public void setAge(int age) {
    this.age = age;
}

// Getter for speciality
public String getSpeciality() {
    return speciality;
}

// Setter for speciality
public void setSpeciality(String speciality) {
    this.speciality = speciality;
}
}
