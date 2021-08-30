import { WeatherForecastDetailsModel } from './weather-forecast-details.model';

export type CurrentWeatherConditionModel = {
  condition: string;
  currentTemperature: number;
  maxTemperature: number;
  minTemperature: number;
  time: string;
  code: number;
  weatherForecastDetails: WeatherForecastDetailsModel;
  icon: string;
};
