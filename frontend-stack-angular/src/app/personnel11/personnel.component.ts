import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonnelService } from '../service/personnel.service';
import { Personnel } from './personnel.model';

@Component({
  selector: 'app-personnel',
  standalone: true, // Important: Make sure this is present
  imports: [FormsModule, CommonModule], // Add FormsModule to the imports array
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
    personnel: Personnel[] = [];
    newPersonnel: Personnel = { id: 0, name: '', sex: '', age: 0, speciality: '' };
    editingPersonnel: Personnel | null = null;
    showForm = false; // Add this line

    constructor(private dataService: PersonnelService) {}

    ngOnInit(): void {
        this.loadPersonnel();
    }

    loadPersonnel() {
        this.dataService.getPersonnel().subscribe(data => {
            this.personnel = data;
        });
    }

    toggleForm() {
      this.showForm = !this.showForm;
      this.newPersonnel = { id: 0, name: '', sex: '', age: 0, speciality: '' }; // Clear the form
    }

    addPersonnel() {
        this.dataService.createPersonnel(this.newPersonnel).subscribe(() => {
            this.loadPersonnel();
            this.toggleForm(); // Hide the form after adding
        });
    }

    editPersonnel(personnel: Personnel) {
        this.editingPersonnel = { ...personnel };
    }

    saveEditPersonnel() {
        if (this.editingPersonnel) {
            this.dataService.updatePersonnel(this.editingPersonnel.id, this.editingPersonnel).subscribe(() => {
                this.editingPersonnel = null;
                this.loadPersonnel();
            });
        }
    }

    cancelEdit() {
        this.editingPersonnel = null;
    }

    deletePersonnel(id: number) {
        this.dataService.deletePersonnel(id).subscribe(() => {
            this.loadPersonnel();
        });
    }
}