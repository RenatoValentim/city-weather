import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { CityService } from '../shared/services/city.service';
import { delay } from 'rxjs/operators';
import { CurrentWeatherConditionModel } from '../shared/models/current-weather-condition.model';
import {
  ICON_NAME,
  COLORS,
  WEATHER_CONDITION_CODE,
} from './city.component.config';

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
      // .pipe(delay(1000))
      .subscribe((city) => {
        this.city = city;
        this.isLoading = false;
      });
  }

  private setColorBack(weatherConditionCode: number): boolean {
    return !(
      weatherConditionCode !== WEATHER_CONDITION_CODE.SNOW &&
      Object.values(WEATHER_CONDITION_CODE).includes(weatherConditionCode!)
    );
  }

  private isDay(time: string): boolean {
    const currentHour = new Date(time).getHours();

    return currentHour > 5 && currentHour < 18;
  }

  private notFoundCod(weatherConditionCode: number | undefined): boolean {
    return !Object.values(WEATHER_CONDITION_CODE).includes(
      weatherConditionCode!
    );
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

    if (!this.setColorBack(weatherConditionCode!)) {
      return COLORS.WHITE;
    }

    return COLORS.DARK;
  }

  goBack(): void {
    this.location.back();
  }

  setButtonArrowBy(weatherConditionCode: number | undefined): string {
    if (!this.setColorBack(weatherConditionCode!)) {
      return ICON_NAME.ARROW_LEFT_WHITE;
    }

    return ICON_NAME.ARROW_LEFT_DARK;
  }

  setArrowTopBy(weatherConditionCode: number | undefined): string {
    if (!this.setColorBack(weatherConditionCode!)) {
      return ICON_NAME.ARROW_TOP_WHITE;
    }

    return ICON_NAME.ARROW_TOP_DARK;
  }

  setArrowDownBy(weatherConditionCode: number | undefined): string {
    if (!this.setColorBack(weatherConditionCode!)) {
      return ICON_NAME.ARROW_DOWN_WHITE;
    }

    return ICON_NAME.ARROW_DOWN_DARK;
  }

  setMiddleIconBy(
    weatherCondition: CurrentWeatherConditionModel | undefined
  ): string {
    if (this.isDay(weatherCondition?.time!)) {
      if (this.notFoundCod(weatherCondition?.code)) {
        return ICON_NAME.WORLD_DARK;
      }

      if (weatherCondition?.code === WEATHER_CONDITION_CODE.SNOW) {
        return ICON_NAME.SUN_SNOWY_DARK;
      }

      return ICON_NAME.SUN_RAIN_WHITE;
    } else {
      if (this.notFoundCod(weatherCondition?.code)) {
        return ICON_NAME.WORLD_DARK;
      }

      if (weatherCondition?.code === WEATHER_CONDITION_CODE.SNOW) {
        return ICON_NAME.MOON_SNOWY_DARK;
      }

      return ICON_NAME.MOON_RAIN_WHITE;
    }
  }

  setForecastIcon(
    weatherCondition: CurrentWeatherConditionModel | undefined
  ): string {
    if (this.notFoundCod(weatherCondition?.code)) {
      return ICON_NAME.WORLD_DARK;
    }

    return ICON_NAME.SUN_SNOWY_DARK;
  }
}
