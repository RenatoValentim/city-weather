import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { CityService } from '../shared/services/city.service';
import { CurrentWeatherConditionModel } from '../shared/models/current-weather-condition.model';
import { delay } from 'rxjs/operators';
import { ICON_NAME, COLORS, WEATHER_CONDITION_CODE } from './city.component.config';

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

  setBackgroundColorBy(weatherConditionCode: number | undefined): string {
    if (this.isLoading) {
      return COLORS.WHITE_SMOKE;
    }

    if (weatherConditionCode === WEATHER_CONDITION_CODE.SUNNY) {
      return COLORS.MALIBU;
    }

    if (weatherConditionCode === WEATHER_CONDITION_CODE.RAIN) {
      return COLORS.BLUE_ZODIAC;
    }

    if (weatherConditionCode === WEATHER_CONDITION_CODE.SNOW) {
      return COLORS.DARK_GRAY;
    }

    return COLORS.WHITE_SMOKE;
  }

  setTextColorBy(weatherConditionCode: number | undefined): string {
    if (this.isLoading) {
      return COLORS.DARK;
    }

    if (weatherConditionCode !== WEATHER_CONDITION_CODE.SUNNY) {
      return COLORS.WHITE;
    }

    return COLORS.DARK;
  }

  goBack(): void {
    this.location.back();
  }

  setButtonArrowBy(weatherCondition: string | undefined): string {
    return ICON_NAME.ARROW_LEFT_DARK;
  }
}
