package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.entity.Vehicle;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Map;
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    @Query("SELECT type, COUNT(*) FROM Vehicle GROUP BY type")
    List<Object[]> countByType();

    @Query("SELECT operational, COUNT(*) FROM Vehicle GROUP BY operational")
    List<Object[]> countByOperational();
}
