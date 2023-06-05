import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneysComponent } from './components/journeys/journeys.component';
import { FlightRoutingModule } from './flight-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [JourneysComponent],
  imports: [CommonModule, FlightRoutingModule, ReactiveFormsModule, FormsModule],
})
export class FlightModule {}
