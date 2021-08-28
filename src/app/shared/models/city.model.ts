import { CurrentWeatherConditionModel } from './current-weather-condition.model';
import { ForecastDayModel } from './forecast-day.model';

export type CityModel = {
  currentWeatherCondition: CurrentWeatherConditionModel;
  forecastDay: ForecastDayModel[];
}
