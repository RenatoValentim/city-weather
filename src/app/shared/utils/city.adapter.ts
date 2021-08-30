import { CityModel } from '../models/city.model';
import {
  ApiResponseModel,
  Hour,
} from './external-api-models/response-api.model';

const WHITESPACE = ' ';
const HOURS_MINUTE_SEPARATOR = ':';
type ShiftHours = '03' | '09' | '15' | '21';

export function cityAdapter(apiResponse: ApiResponseModel): CityModel {
  let localTime = apiResponse.location.localtime
    .split(WHITESPACE)[1]
    .split(HOURS_MINUTE_SEPARATOR)[0];

  if (localTime.length < 2) {
    localTime = `0${localTime}`;
  }

  return {
    currentWeatherCondition: {
      condition: apiResponse.current.condition.text,
      currentTemperature: apiResponse.current.temp_c,
      maxTemperature: apiResponse.forecast.forecastday[0]?.day.maxtemp_c,
      minTemperature: apiResponse.forecast.forecastday[0]?.day.mintemp_c,
      time: apiResponse.current.last_updated,
      code: apiResponse.current.condition.code,
      icon: apiResponse.current.condition.icon,
      weatherForecastDetails: {
        windSpeed: apiResponse.current.wind_kph,
        humidity: apiResponse.current.humidity,
        shiftCondition: [
          {
            shift: 'sunrise',
            time: apiResponse.forecast.forecastday[0].astro.sunrise,
          },
          // TODO: Esse valor é relativo a que?
          {
            shift: 'sunset',
            time: apiResponse.forecast.forecastday[0].astro.sunset,
          },
        ],
      },
    },
    forecastDay: [
      {
        shift: 'dawn',
        temperature:
          forecastDayBuild({ apiResponse, shiftHours: '03' })?.temp_c ?? 0,
        conditionCode:
          forecastDayBuild({ apiResponse, shiftHours: '03' })?.condition.code ??
          0,
        time: forecastDayBuild({ apiResponse, shiftHours: '03' })?.time ?? '',
        condition:
          forecastDayBuild({ apiResponse, shiftHours: '03' })?.condition.text ??
          '',
        icon:
          forecastDayBuild({ apiResponse, shiftHours: '03' })?.condition.icon ??
          '',
      },
      {
        shift: 'morning',
        temperature:
          forecastDayBuild({ apiResponse, shiftHours: '09' })?.temp_c ?? 0,
        conditionCode:
          forecastDayBuild({ apiResponse, shiftHours: '09' })?.condition.code ??
          0,
        time: forecastDayBuild({ apiResponse, shiftHours: '09' })?.time ?? '',
        condition:
          forecastDayBuild({ apiResponse, shiftHours: '09' })?.condition.text ??
          '',
        icon:
          forecastDayBuild({ apiResponse, shiftHours: '09' })?.condition.icon ??
          '',
      },
      {
        shift: 'afternoon',
        temperature:
          forecastDayBuild({ apiResponse, shiftHours: '15' })?.temp_c ?? 0,
        conditionCode:
          forecastDayBuild({ apiResponse, shiftHours: '15' })?.condition.code ??
          0,
        time: forecastDayBuild({ apiResponse, shiftHours: '15' })?.time ?? '',
        condition:
          forecastDayBuild({ apiResponse, shiftHours: '15' })?.condition.text ??
          '',
        icon:
          forecastDayBuild({ apiResponse, shiftHours: '15' })?.condition.icon ??
          '',
      },
      {
        shift: 'night',
        temperature:
          forecastDayBuild({ apiResponse, shiftHours: '21' })?.temp_c ?? 0,
        conditionCode:
          forecastDayBuild({ apiResponse, shiftHours: '21' })?.condition.code ??
          0,
        time: forecastDayBuild({ apiResponse, shiftHours: '21' })?.time ?? '',
        condition:
          forecastDayBuild({ apiResponse, shiftHours: '21' })?.condition.text ??
          '',
        icon:
          forecastDayBuild({ apiResponse, shiftHours: '21' })?.condition.icon ??
          '',
      },
    ],
  };
}

type ForecastDayBuildParams = {
  apiResponse: ApiResponseModel;
  shiftHours: ShiftHours;
};

function forecastDayBuild(params: ForecastDayBuildParams): Hour | undefined {
  return params.apiResponse.forecast.forecastday[0]?.hour.find(
    (dataHour, index) => {
      const time = dataHour.time
        .split(WHITESPACE)[1]
        .split(HOURS_MINUTE_SEPARATOR)[0];

      if (time === params.shiftHours) {
        return params.apiResponse.forecast.forecastday[0].hour[index];
      }

      return null;
    }
  );
}
