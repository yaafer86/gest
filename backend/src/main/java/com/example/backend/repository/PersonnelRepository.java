package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.entity.Personnel;

public interface PersonnelRepository extends JpaRepository<Personnel, Long> {
}
