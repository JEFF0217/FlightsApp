import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { Journey } from 'src/app/models/Journey.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-journeys',
  templateUrl: './journeys.component.html',
  styleUrls: ['./journeys.component.css'],
})
export class JourneysComponent implements OnInit {
  searchForm: FormGroup;
  journeys: Journey[] = [];
  selectedCurrency: string = 'USD';
  constructor(
    private flightService: FlightService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.searchForm = this.formBuilder.group({
      origin: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.pattern('[A-Z]{3}'),
        ],
      ],
      destination: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.pattern('[A-Z]{3}'),
        ],
      ],
    });
  }
  ngOnInit() {
    this.searchFlights();
  }
  isFieldInvalid(field: string) {
    const formControl = this.searchForm.get(field);
    return formControl?.invalid && (formControl.dirty || formControl.touched);
  }

  getFieldErrors(field: string) {
    const formControl = this.searchForm.get(field);
    return formControl?.errors;
  }
  onInputChange(event: any, controlName: string) {
    const value = event.target.value.toUpperCase();
    this.searchForm.controls[controlName].setValue(value);
  }
  convertPrice(value: number, currency: string) {
    type CurrencyValues = {
      [key: string]: number;
    };

    const VALUES: CurrencyValues = {
      USD: 1,
      EUR: 0.93,
      COP: 4325.53,
    };

    const conversionRate = VALUES[currency];

    const convertedValue = value * conversionRate;
    const formattedValue = convertedValue.toLocaleString(undefined, {
      style: 'currency',
      currency: currency,
    });
  
    return formattedValue;
  }

  searchFlights() {
    if (this.searchForm.valid) {
      const origin = this.searchForm.value.origin;
      const destination = this.searchForm.value.destination;

      this.flightService.getFlights(origin, destination).subscribe(
        (journeys) => {
          this.journeys = journeys;
        },
        (error) => {
          this.toastr.error(error.error, 'Error', {
            timeOut: 3000,
          });
        }
      );
    }
  }
}
