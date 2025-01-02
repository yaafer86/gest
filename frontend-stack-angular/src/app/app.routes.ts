import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { AddEditPersonnelComponent } from './personnel/add-edit-personnel/add-edit-personnel.component';
import { VehicleComponent } from './vehicle/vehicle.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'vehicles', component: VehicleComponent },
  { path: 'add-personnel', component: AddEditPersonnelComponent },
  { path: 'edit-personnel/:id', component: AddEditPersonnelComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];