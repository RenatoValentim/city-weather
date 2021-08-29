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
      weatherForecastDetails: {
        windSpeed: apiResponse.current.wind_kph,
        humidity: apiResponse.current.humidity,
        shiftCondition: [
          {
            condition:
              shiftConditionBuild({
                apiResponse,
                localTime,
                hoursToSubtract: 4,
              })?.condition.text ?? '',
            time:
              shiftConditionBuild({
                apiResponse,
                localTime,
                hoursToSubtract: 2,
              })?.time ?? '',
          },
          // TODO: Esse valor é relativo a que?
          {
            condition:
              shiftConditionBuild({
                apiResponse,
                localTime,
                hoursToSubtract: 4,
              })?.condition.text ?? '',
            time:
              shiftConditionBuild({
                apiResponse,
                localTime,
                hoursToSubtract: 2,
              })?.time ?? '',
          },
        ],
      },
    },
    forecastDay: [
      {
        shift: 'dawn',
        temperature: forecastDayBuild({ apiResponse, shiftHours: '03' }) ?? 0,
      },
      {
        shift: 'morning',
        temperature: forecastDayBuild({ apiResponse, shiftHours: '09' }) ?? 0,
      },
      {
        shift: 'afternoon',
        temperature: forecastDayBuild({ apiResponse, shiftHours: '15' }) ?? 0,
      },
      {
        shift: 'night',
        temperature: forecastDayBuild({ apiResponse, shiftHours: '21' }) ?? 0,
      },
    ],
  };
}

type ShiftConditionBuildParams = {
  apiResponse: ApiResponseModel;
  localTime: string;
  hoursToSubtract: number;
};

function shiftConditionBuild(
  params: ShiftConditionBuildParams
): Hour | undefined {
  return params.apiResponse.forecast.forecastday[0]?.hour.find(
    (dataHours, index) => {
      let time = dataHours.time
        .split(WHITESPACE)[1]
        .split(HOURS_MINUTE_SEPARATOR)[0];

      if (time.length < 2) {
        time = `0${time}`;
      }

      if (time === params.localTime) {
        return params.apiResponse.forecast.forecastday[0].hour[
          index - params.hoursToSubtract
        ];
      }

      return null;
    }
  );
}

type ForecastDayBuildParams = {
  apiResponse: ApiResponseModel;
  shiftHours: ShiftHours;
};

function forecastDayBuild(params: ForecastDayBuildParams): number | undefined {
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
  )?.temp_c;
}
