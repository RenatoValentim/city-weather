import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { CityService } from '../shared/services/city.service';
import { CurrentWeatherConditionModel } from '../shared/models/current-weather-condition.model';
import { delay } from 'rxjs/operators';
import { ICON_NAME } from './city.component.config';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  isLoading = true;
  city!: CityModel;
  cityName!: string | null;
  readonly imagePath = '../../assets/images/';

  constructor(
    private activatedRoute: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (param.has('cityName')) {
        this.cityName = param.get('cityName');
        this.getCity();
      }
    });
  }

  private getCity(): void {
    this.cityService
      .loadBy(this.cityName!)
      // TODO: Apenas para debug remover depois
      // .pipe(delay(2000))
      .subscribe((city) => {
        this.city = city;
        this.isLoading = false;
      });
  }

  setBackgroundColorBy(
    weatherCondition: CurrentWeatherConditionModel | undefined
  ): string {
    if (this.isLoading) {
      return '#F5F5F5';
    }

    return '#F5F5F5';
  }

  setTextColorBy(weatherCondition: string | undefined): string {
    if (this.isLoading) {
      return '#000';
    }

    return '#000';
  }

  goBack(): void {
    this.location.back();
  }

  setButtonArrowBy(weatherCondition: string | undefined): string {
    return ICON_NAME.ARROW_LEFT_DARK;
  }
}
