package com.example.backend.service;

import com.example.backend.entity.Personnel;
import com.example.backend.repository.PersonnelRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonnelService {
    private final PersonnelRepository personnelRepository;

    public PersonnelService(PersonnelRepository personnelRepository) {
        this.personnelRepository = personnelRepository;
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
        existingPersonnel.setRole(personnel.getRole());
        return personnelRepository.save(existingPersonnel);
    }

    public void deletePersonnel(Long id) {
        personnelRepository.deleteById(id);
    }
}
