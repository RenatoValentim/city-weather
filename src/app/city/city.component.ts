import { Component, OnInit } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { CityService } from '../shared/services/city.service';
import { CurrentWeatherConditionModel } from '../shared/models/current-weather-condition.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  isLoading = false;
  city!: CityModel;
  cityName!: string | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.activatedRoute.paramMap?.subscribe((param) => {
      if (param.has('cityName')) {
        this.cityName = param.get('cityName');

        this.cityService.loadBy()?.subscribe((city) => {
          this.city = city;
          this.isLoading = false;
        });
      }
    });
  }

  setBackgroundColorBy(
    weatherCondition: CurrentWeatherConditionModel | undefined
  ): string {
    return '#F5F5F5';
  }

  setTextColorBy(weatherCondition: string | undefined): string {
    return '#000';
  }
}
