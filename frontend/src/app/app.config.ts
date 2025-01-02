import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { appRoutes } from './app.routes'; // Import the routing configuration

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonnelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  // Using the routes defined in app.routes.ts
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppConfigModule { }
