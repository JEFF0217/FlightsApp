import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JourneysComponent } from './components/journeys/journeys.component';

const routes: Routes = [
  {
    path: '',
    component: JourneysComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingModule {}
