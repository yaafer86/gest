
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from '../personnel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-edit-personnel',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-edit-personnel.component.html',
  styleUrls: ['./add-edit-personnel.component.css'],
})
export class AddEditPersonnelComponent implements OnInit {
  personnel: any = {};
  isEditMode: boolean = false;

  constructor(
    private personnelService: PersonnelService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.personnelService.getPersonnel().subscribe((data) => {
        this.personnel = data.find((p) => p.id === +id);
      });
    }
  }

  savePersonnel() {
    if (this.isEditMode) {
      this.personnelService
        .updatePersonnel(this.personnel.id, this.personnel)
        .subscribe(() => this.router.navigate(['/']));
    } else {
      this.personnelService.addPersonnel(this.personnel).subscribe(() => this.router.navigate(['/']));
    }
  }
}
