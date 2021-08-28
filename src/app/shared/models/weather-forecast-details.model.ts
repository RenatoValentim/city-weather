import { ShiftConditionModel } from './shift-condition.model';

export type WeatherForecastDetailsModel = {
  windSpeed: number;
  shiftCondition: ShiftConditionModel[];
  humidity: number;
};
