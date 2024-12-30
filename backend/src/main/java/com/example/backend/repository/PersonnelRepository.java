package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.backend.entity.Personnel;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Map;

public interface PersonnelRepository extends JpaRepository<Personnel, Long> {
    @Query("SELECT sex, COUNT(*) FROM Personnel GROUP BY sex")
    List<Object[]> countBySex();

    @Query("SELECT CASE " +
        "WHEN age BETWEEN 18 AND 30 THEN '18-30' " +
        "WHEN age BETWEEN 31 AND 50 THEN '31-50' " +
        "ELSE '51+' END AS ageGroup, COUNT(*) " +
        "FROM Personnel GROUP BY ageGroup")
    List<Object[]> countByAgeGroup();

    @Query("SELECT speciality, COUNT(*) FROM Personnel GROUP BY speciality")
    List<Object[]> countBySpeciality();
}
