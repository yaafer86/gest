import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { VehicleComponent } from './vehicle/vehicle.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'personnel', component: PersonnelComponent },
  { path: 'vehicle', component: VehicleComponent },
];