package com.example.backend.service;

import com.example.backend.entity.Personnel;
import com.example.backend.repository.PersonnelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
@Service
public class PersonnelService {
    private final PersonnelRepository personnelRepository;

    public PersonnelService(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
    }

    public Map<String, Object> getStatistics() {
        Map<String, Object> stats = new HashMap<>();
        stats.put("totalPersonnel", personnelRepository.count());
        stats.put("sexDistribution", personnelRepository.countBySex());
        stats.put("ageGroups", personnelRepository.countByAgeGroup());
        stats.put("specialities", personnelRepository.countBySpeciality());
        return stats;
    }

    public List<Personnel> getAllPersonnel() {
        return personnelRepository.findAll();
    }

    public Personnel addPersonnel(Personnel personnel) {
        return personnelRepository.save(personnel);
    }

    public Personnel updatePersonnel(Long id, Personnel personnel) {
        Personnel existingPersonnel = personnelRepository.findById(id).orElseThrow();
        existingPersonnel.setName(personnel.getName());
       // existingPersonnel.setRole(personnel.getRole());
        return personnelRepository.save(existingPersonnel);
    }

    public void deletePersonnel(Long id) {
        personnelRepository.deleteById(id);
    }
}
