
import { Component, OnInit } from '@angular/core';
import { PersonnelService } from './personnel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personnel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css'],
})
export class PersonnelComponent implements OnInit {
  personnelList: any[] = [];

  constructor(private personnelService: PersonnelService) {}

  ngOnInit(): void {
    this.getPersonnel();
  }

  getPersonnel() {
    this.personnelService.getPersonnel().subscribe((data) => {
      this.personnelList = data;
    });
  }

  deletePersonnel(id: number) {
    this.personnelService.deletePersonnel(id).subscribe(() => {
      this.getPersonnel();
    });
  }
}
