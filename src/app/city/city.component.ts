import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { CityModel } from '../shared/models/city.model';
import { CityService } from '../shared/services/city.service';
import {
  COLORS,
  ICON_NAME
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

  private setColorBack(weatherConditionCode: string): boolean {
    weatherConditionCode = weatherConditionCode?.toLocaleLowerCase();

    return (
      weatherConditionCode?.includes('cloud') ||
      weatherConditionCode?.includes('snow') ||
      weatherConditionCode?.includes('mist') ||
      weatherConditionCode?.includes('sleet') ||
      weatherConditionCode?.includes('clear') ||
      weatherConditionCode?.includes('overcast')
    );
  }

  setBackgroundColorBy(weatherCondition: string | undefined): string {
    if (this.setColorBack(weatherCondition!) || this.isLoading) {
      return COLORS.DARK_GRAY;
    }

    if (weatherCondition?.includes('rain')) {
      return COLORS.BLUE_ZODIAC;
    }

    if (weatherCondition?.includes('sun')) {
      return COLORS.MALIBU;
    }

    return COLORS.WHITE_SMOKE;
  }

  setTextColorBy(weatherCondition: string | undefined): string {
    if (this.setColorBack(weatherCondition!) || this.isLoading) {
      return COLORS.DARK;
    }

    return COLORS.WHITE;
  }

  goBack(): void {
    this.location.back();
  }

  setButtonArrowBy(weatherCondition: string | undefined): string {
    if (this.setColorBack(weatherCondition!) || this.isLoading) {
      return ICON_NAME.ARROW_LEFT_DARK;
    }

    return ICON_NAME.ARROW_LEFT_WHITE;
  }

  setArrowTopBy(weatherCondition: string | undefined): string {
    if (this.setColorBack(weatherCondition!) || this.isLoading) {
      return ICON_NAME.ARROW_TOP_DARK;
    }

    return ICON_NAME.ARROW_TOP_WHITE;
  }

  setArrowDownBy(weatherCondition: string | undefined): string {
    if (this.setColorBack(weatherCondition!) || this.isLoading) {
      return ICON_NAME.ARROW_DOWN_DARK;
    }

    return ICON_NAME.ARROW_DOWN_WHITE;
  }

  setDividerColorBy(weatherCondition: string | undefined): string {
    let CSS_CLASS_SEPARATOR: 'separator-white' | 'separator-black' =
      'separator-black';

    if (!this.setColorBack(weatherCondition!)) {
      CSS_CLASS_SEPARATOR = 'separator-white';

      return CSS_CLASS_SEPARATOR;
    }

    return CSS_CLASS_SEPARATOR;
  }
}
