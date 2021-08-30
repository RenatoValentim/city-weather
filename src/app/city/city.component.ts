import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { CityModel } from '../shared/models/city.model';
import { CityService } from '../shared/services/city.service';
import {
  COLORS,
  ICON_NAME,
  WEATHER_CONDITION_CODE
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
  readonly UNITY_MS_TO_KM_H = 0.277778;

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
    this.cityService.loadBy(this.cityName!).subscribe((city) => {
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

  setBackgroundColorBy(weatherConditionCode: number | undefined): string {
    if (this.isLoading) {
      return COLORS.WHITE_SMOKE;
    }

    if (weatherConditionCode === WEATHER_CONDITION_CODE.SUNNY_OR_CLEAR_NIGHT) {
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

  setDividerColorBy(weatherCondition: number): string {
    let CSS_CLASS_SEPARATOR: 'separator-white' | 'separator-black' =
      'separator-black';

    if (weatherCondition === WEATHER_CONDITION_CODE.SNOW) {
      CSS_CLASS_SEPARATOR = 'separator-white';

      return CSS_CLASS_SEPARATOR;
    }

    return CSS_CLASS_SEPARATOR;
  }
}
