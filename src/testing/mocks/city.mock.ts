import { cityAdapter } from '../../app/shared/utils/city.adapter';
import { WEATHER_CONDITION_CODE, KEYWORDS_WEATHER_CONDITION } from '../../app/city/city.component.config';

export const CITY_MOCK = cityAdapter({
  location: {
    name: 'Recife',
    region: 'Pernambuco',
    country: 'Brazil',
    lat: -8.05,
    lon: -34.9,
    tz_id: 'America/Noronha',
    localtime_epoch: 1630209456,
    localtime: '2021-08-29 1:57',
  },
  current: {
    last_updated_epoch: 1630208700,
    last_updated: '2021-08-29 10:45',
    temp_c: 24.0,
    temp_f: 75.2,
    is_day: 0,
    condition: {
      text: KEYWORDS_WEATHER_CONDITION.SUN,
      icon: '../../assets/images/world_dark.png',
      code: WEATHER_CONDITION_CODE.RAIN,
      // code: 5555,
    },
    wind_mph: 10.5,
    wind_kph: 16.9,
    wind_degree: 170,
    wind_dir: 'S',
    pressure_mb: 1016.0,
    pressure_in: 30.0,
    precip_mm: 0.4,
    precip_in: 0.02,
    humidity: 78,
    cloud: 75,
    feelslike_c: 26.4,
    feelslike_f: 79.4,
    vis_km: 8.0,
    vis_miles: 4.0,
    uv: 1.0,
    gust_mph: 15.2,
    gust_kph: 24.5,
  },
  forecast: {
    forecastday: [
      {
        date: '2021-08-29',
        date_epoch: 1630195200,
        day: {
          maxtemp_c: 26.8,
          maxtemp_f: 80.2,
          mintemp_c: 22.6,
          mintemp_f: 72.7,
          avgtemp_c: 24.3,
          avgtemp_f: 75.8,
          maxwind_mph: 13.6,
          maxwind_kph: 22.0,
          totalprecip_mm: 26.1,
          totalprecip_in: 1.03,
          avgvis_km: 9.8,
          avgvis_miles: 6.0,
          avghumidity: 87.0,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 93,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: 'Heavy rain',
            icon: '//cdn.weatherapi.com/weather/64x64/day/308.png',
            code: 1195,
          },
          uv: 11.0,
        },
        astro: {
          sunrise: '05:23 AM',
          sunset: '05:19 PM',
          moonrise: '11:10 PM',
          moonset: '10:21 AM',
          moon_phase: 'Waning Crescent',
          moon_illumination: '48',
        },
        hour: [
          {
            time_epoch: 1630202400,
            time: '2021-08-29 00:00',
            temp_c: 23.1,
            temp_f: 73.6,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 166,
            wind_dir: 'SSE',
            pressure_mb: 1017.0,
            pressure_in: 30.02,
            precip_mm: 0.4,
            precip_in: 0.02,
            humidity: 91,
            cloud: 89,
            feelslike_c: 25.4,
            feelslike_f: 77.7,
            windchill_c: 23.1,
            windchill_f: 73.6,
            heatindex_c: 25.4,
            heatindex_f: 77.7,
            dewpoint_c: 21.5,
            dewpoint_f: 70.7,
            will_it_rain: 1,
            chance_of_rain: 93,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.2,
            gust_kph: 24.5,
            uv: 1.0,
          },
          {
            time_epoch: 1630206000,
            time: '2021-08-29 01:00',
            temp_c: 22.9,
            temp_f: 73.2,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 9.6,
            wind_kph: 15.5,
            wind_degree: 166,
            wind_dir: 'SSE',
            pressure_mb: 1016.0,
            pressure_in: 30.0,
            precip_mm: 0.2,
            precip_in: 0.01,
            humidity: 91,
            cloud: 92,
            feelslike_c: 25.2,
            feelslike_f: 77.4,
            windchill_c: 22.9,
            windchill_f: 73.2,
            heatindex_c: 25.2,
            heatindex_f: 77.4,
            dewpoint_c: 21.4,
            dewpoint_f: 70.5,
            will_it_rain: 1,
            chance_of_rain: 87,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.0,
            gust_kph: 24.1,
            uv: 1.0,
          },
          {
            time_epoch: 1630209600,
            time: '2021-08-29 02:00',
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 166,
            wind_dir: 'SSE',
            pressure_mb: 1015.0,
            pressure_in: 29.98,
            precip_mm: 0.2,
            precip_in: 0.01,
            humidity: 91,
            cloud: 70,
            feelslike_c: 25.0,
            feelslike_f: 77.0,
            windchill_c: 22.7,
            windchill_f: 72.9,
            heatindex_c: 25.0,
            heatindex_f: 77.0,
            dewpoint_c: 21.2,
            dewpoint_f: 70.2,
            will_it_rain: 1,
            chance_of_rain: 89,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.7,
            gust_kph: 25.2,
            uv: 1.0,
          },
          {
            time_epoch: 1630213200,
            time: '2021-08-29 03:00',
            temp_c: 22.8,
            temp_f: 73.0,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '../../assets/images/world_dark.png',
              code: 1240,
            },
            wind_mph: 9.6,
            wind_kph: 15.5,
            wind_degree: 163,
            wind_dir: 'SSE',
            pressure_mb: 1016.0,
            pressure_in: 29.99,
            precip_mm: 1.5,
            precip_in: 0.06,
            humidity: 91,
            cloud: 55,
            feelslike_c: 25.1,
            feelslike_f: 77.2,
            windchill_c: 22.8,
            windchill_f: 73.0,
            heatindex_c: 25.1,
            heatindex_f: 77.2,
            dewpoint_c: 21.2,
            dewpoint_f: 70.2,
            will_it_rain: 1,
            chance_of_rain: 92,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.2,
            gust_kph: 24.5,
            uv: 1.0,
          },
          {
            time_epoch: 1630216800,
            time: '2021-08-29 04:00',
            temp_c: 22.7,
            temp_f: 72.9,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 9.4,
            wind_kph: 15.1,
            wind_degree: 169,
            wind_dir: 'S',
            pressure_mb: 1016.0,
            pressure_in: 30.0,
            precip_mm: 0.2,
            precip_in: 0.01,
            humidity: 91,
            cloud: 69,
            feelslike_c: 25.0,
            feelslike_f: 77.0,
            windchill_c: 22.7,
            windchill_f: 72.9,
            heatindex_c: 25.0,
            heatindex_f: 77.0,
            dewpoint_c: 21.2,
            dewpoint_f: 70.2,
            will_it_rain: 1,
            chance_of_rain: 87,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.2,
            gust_kph: 24.5,
            uv: 1.0,
          },
          {
            time_epoch: 1630220400,
            time: '2021-08-29 05:00',
            temp_c: 22.6,
            temp_f: 72.7,
            is_day: 0,
            condition: {
              text: 'Patchy rain possible',
              icon: '//cdn.weatherapi.com/weather/64x64/night/176.png',
              code: 1063,
            },
            wind_mph: 9.6,
            wind_kph: 15.5,
            wind_degree: 173,
            wind_dir: 'S',
            pressure_mb: 1016.0,
            pressure_in: 30.01,
            precip_mm: 0.1,
            precip_in: 0.0,
            humidity: 92,
            cloud: 74,
            feelslike_c: 24.9,
            feelslike_f: 76.8,
            windchill_c: 22.6,
            windchill_f: 72.7,
            heatindex_c: 24.9,
            heatindex_f: 76.8,
            dewpoint_c: 21.2,
            dewpoint_f: 70.2,
            will_it_rain: 1,
            chance_of_rain: 91,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.4,
            gust_kph: 24.8,
            uv: 1.0,
          },
          {
            time_epoch: 1630224000,
            time: '2021-08-29 06:00',
            temp_c: 23.0,
            temp_f: 73.4,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 168,
            wind_dir: 'SSE',
            pressure_mb: 1017.0,
            pressure_in: 30.02,
            precip_mm: 0.5,
            precip_in: 0.02,
            humidity: 91,
            cloud: 74,
            feelslike_c: 25.3,
            feelslike_f: 77.5,
            windchill_c: 23.0,
            windchill_f: 73.4,
            heatindex_c: 25.3,
            heatindex_f: 77.5,
            dewpoint_c: 21.4,
            dewpoint_f: 70.5,
            will_it_rain: 1,
            chance_of_rain: 91,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.0,
            gust_kph: 24.1,
            uv: 5.0,
          },
          {
            time_epoch: 1630227600,
            time: '2021-08-29 07:00',
            temp_c: 24.0,
            temp_f: 75.2,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 11.2,
            wind_kph: 18.0,
            wind_degree: 159,
            wind_dir: 'SSE',
            pressure_mb: 1017.0,
            pressure_in: 30.04,
            precip_mm: 0.2,
            precip_in: 0.01,
            humidity: 87,
            cloud: 76,
            feelslike_c: 26.2,
            feelslike_f: 79.2,
            windchill_c: 24.0,
            windchill_f: 75.2,
            heatindex_c: 26.2,
            heatindex_f: 79.2,
            dewpoint_c: 21.7,
            dewpoint_f: 71.1,
            will_it_rain: 1,
            chance_of_rain: 82,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 15.4,
            gust_kph: 24.8,
            uv: 5.0,
          },
          {
            time_epoch: 1630231200,
            time: '2021-08-29 08:00',
            temp_c: 25.2,
            temp_f: 77.4,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 12.8,
            wind_kph: 20.5,
            wind_degree: 148,
            wind_dir: 'SSE',
            pressure_mb: 1018.0,
            pressure_in: 30.06,
            precip_mm: 0.3,
            precip_in: 0.01,
            humidity: 83,
            cloud: 67,
            feelslike_c: 27.6,
            feelslike_f: 81.7,
            windchill_c: 25.2,
            windchill_f: 77.4,
            heatindex_c: 27.6,
            heatindex_f: 81.7,
            dewpoint_c: 22.2,
            dewpoint_f: 72.0,
            will_it_rain: 1,
            chance_of_rain: 90,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 18.1,
            gust_kph: 29.2,
            uv: 6.0,
          },
          {
            time_epoch: 1630234800,
            time: '2021-08-29 09:00',
            temp_c: 25.8,
            temp_f: 78.4,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '../../assets/images/world_dark.png',
              code: 1240,
            },
            wind_mph: 13.4,
            wind_kph: 21.6,
            wind_degree: 142,
            wind_dir: 'SE',
            pressure_mb: 1018.0,
            pressure_in: 30.06,
            precip_mm: 2.4,
            precip_in: 0.09,
            humidity: 81,
            cloud: 68,
            feelslike_c: 28.3,
            feelslike_f: 82.9,
            windchill_c: 25.8,
            windchill_f: 78.4,
            heatindex_c: 28.3,
            heatindex_f: 82.9,
            dewpoint_c: 22.4,
            dewpoint_f: 72.3,
            will_it_rain: 1,
            chance_of_rain: 88,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 20.8,
            gust_kph: 33.5,
            uv: 6.0,
          },
          {
            time_epoch: 1630238400,
            time: '2021-08-29 10:00',
            temp_c: 26.1,
            temp_f: 79.0,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 13.6,
            wind_kph: 22.0,
            wind_degree: 138,
            wind_dir: 'SE',
            pressure_mb: 1018.0,
            pressure_in: 30.06,
            precip_mm: 0.7,
            precip_in: 0.03,
            humidity: 81,
            cloud: 62,
            feelslike_c: 28.8,
            feelslike_f: 83.8,
            windchill_c: 26.1,
            windchill_f: 79.0,
            heatindex_c: 28.8,
            heatindex_f: 83.8,
            dewpoint_c: 22.5,
            dewpoint_f: 72.5,
            will_it_rain: 1,
            chance_of_rain: 89,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 17.2,
            gust_kph: 27.7,
            uv: 6.0,
          },
          {
            time_epoch: 1630242000,
            time: '2021-08-29 11:00',
            temp_c: 26.8,
            temp_f: 80.2,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 13.6,
            wind_kph: 22.0,
            wind_degree: 137,
            wind_dir: 'SE',
            pressure_mb: 1017.0,
            pressure_in: 30.03,
            precip_mm: 0.8,
            precip_in: 0.03,
            humidity: 81,
            cloud: 77,
            feelslike_c: 30.0,
            feelslike_f: 86.0,
            windchill_c: 26.8,
            windchill_f: 80.2,
            heatindex_c: 30.0,
            heatindex_f: 86.0,
            dewpoint_c: 23.3,
            dewpoint_f: 73.9,
            will_it_rain: 1,
            chance_of_rain: 81,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 19.5,
            gust_kph: 31.3,
            uv: 6.0,
          },
          {
            time_epoch: 1630245600,
            time: '2021-08-29 12:00',
            temp_c: 26.7,
            temp_f: 80.1,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 13.2,
            wind_kph: 21.2,
            wind_degree: 133,
            wind_dir: 'SE',
            pressure_mb: 1016.0,
            pressure_in: 30.01,
            precip_mm: 2.4,
            precip_in: 0.09,
            humidity: 81,
            cloud: 84,
            feelslike_c: 29.8,
            feelslike_f: 85.6,
            windchill_c: 26.7,
            windchill_f: 80.1,
            heatindex_c: 29.8,
            heatindex_f: 85.6,
            dewpoint_c: 23.1,
            dewpoint_f: 73.6,
            will_it_rain: 1,
            chance_of_rain: 89,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 20.4,
            gust_kph: 32.8,
            uv: 6.0,
          },
          {
            time_epoch: 1630249200,
            time: '2021-08-29 13:00',
            temp_c: 26.4,
            temp_f: 79.5,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 12.1,
            wind_kph: 19.4,
            wind_degree: 131,
            wind_dir: 'SE',
            pressure_mb: 1015.0,
            pressure_in: 29.98,
            precip_mm: 0.8,
            precip_in: 0.03,
            humidity: 82,
            cloud: 81,
            feelslike_c: 29.4,
            feelslike_f: 84.9,
            windchill_c: 26.4,
            windchill_f: 79.5,
            heatindex_c: 29.4,
            heatindex_f: 84.9,
            dewpoint_c: 23.0,
            dewpoint_f: 73.4,
            will_it_rain: 1,
            chance_of_rain: 88,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 19.9,
            gust_kph: 32.0,
            uv: 6.0,
          },
          {
            time_epoch: 1630252800,
            time: '2021-08-29 14:00',
            temp_c: 26.2,
            temp_f: 79.2,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 11.9,
            wind_kph: 19.1,
            wind_degree: 132,
            wind_dir: 'SE',
            pressure_mb: 1015.0,
            pressure_in: 29.96,
            precip_mm: 0.8,
            precip_in: 0.03,
            humidity: 82,
            cloud: 79,
            feelslike_c: 29.0,
            feelslike_f: 84.2,
            windchill_c: 26.2,
            windchill_f: 79.2,
            heatindex_c: 29.0,
            heatindex_f: 84.2,
            dewpoint_c: 22.9,
            dewpoint_f: 73.2,
            will_it_rain: 1,
            chance_of_rain: 88,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 20.6,
            gust_kph: 33.1,
            uv: 6.0,
          },
          {
            time_epoch: 1630256400,
            time: '2021-08-29 15:00',
            temp_c: 25.9,
            temp_f: 78.6,
            is_day: 1,
            condition: {
              text: 'Moderate or heavy rain shower',
              icon: '../../assets/images/world_dark.png',
              code: 1243,
            },
            wind_mph: 11.2,
            wind_kph: 18.0,
            wind_degree: 135,
            wind_dir: 'SE',
            pressure_mb: 1014.0,
            pressure_in: 29.95,
            precip_mm: 4.4,
            precip_in: 0.17,
            humidity: 84,
            cloud: 63,
            feelslike_c: 28.7,
            feelslike_f: 83.7,
            windchill_c: 25.9,
            windchill_f: 78.6,
            heatindex_c: 28.7,
            heatindex_f: 83.7,
            dewpoint_c: 22.9,
            dewpoint_f: 73.2,
            will_it_rain: 1,
            chance_of_rain: 78,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 20.1,
            gust_kph: 32.4,
            uv: 6.0,
          },
          {
            time_epoch: 1630260000,
            time: '2021-08-29 16:00',
            temp_c: 25.6,
            temp_f: 78.1,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 11.0,
            wind_kph: 17.6,
            wind_degree: 135,
            wind_dir: 'SE',
            pressure_mb: 1015.0,
            pressure_in: 29.96,
            precip_mm: 0.8,
            precip_in: 0.03,
            humidity: 85,
            cloud: 67,
            feelslike_c: 28.3,
            feelslike_f: 82.9,
            windchill_c: 25.6,
            windchill_f: 78.1,
            heatindex_c: 28.3,
            heatindex_f: 82.9,
            dewpoint_c: 22.9,
            dewpoint_f: 73.2,
            will_it_rain: 0,
            chance_of_rain: 63,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 14.1,
            gust_kph: 22.7,
            uv: 6.0,
          },
          {
            time_epoch: 1630263600,
            time: '2021-08-29 17:00',
            temp_c: 24.9,
            temp_f: 76.8,
            is_day: 1,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/day/353.png',
              code: 1240,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 138,
            wind_dir: 'SE',
            pressure_mb: 1015.0,
            pressure_in: 29.97,
            precip_mm: 0.7,
            precip_in: 0.03,
            humidity: 87,
            cloud: 69,
            feelslike_c: 27.4,
            feelslike_f: 81.3,
            windchill_c: 24.9,
            windchill_f: 76.8,
            heatindex_c: 27.4,
            heatindex_f: 81.3,
            dewpoint_c: 22.5,
            dewpoint_f: 72.5,
            will_it_rain: 1,
            chance_of_rain: 87,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 13.6,
            gust_kph: 22.0,
            uv: 5.0,
          },
          {
            time_epoch: 1630267200,
            time: '2021-08-29 18:00',
            temp_c: 23.6,
            temp_f: 74.5,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 8.9,
            wind_kph: 14.4,
            wind_degree: 140,
            wind_dir: 'SE',
            pressure_mb: 1015.0,
            pressure_in: 29.98,
            precip_mm: 2.1,
            precip_in: 0.08,
            humidity: 88,
            cloud: 74,
            feelslike_c: 25.8,
            feelslike_f: 78.4,
            windchill_c: 23.6,
            windchill_f: 74.5,
            heatindex_c: 25.8,
            heatindex_f: 78.4,
            dewpoint_c: 21.5,
            dewpoint_f: 70.7,
            will_it_rain: 1,
            chance_of_rain: 87,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 14.8,
            gust_kph: 23.8,
            uv: 1.0,
          },
          {
            time_epoch: 1630270800,
            time: '2021-08-29 19:00',
            temp_c: 23.6,
            temp_f: 74.5,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 8.5,
            wind_kph: 13.7,
            wind_degree: 136,
            wind_dir: 'SE',
            pressure_mb: 1016.0,
            pressure_in: 29.99,
            precip_mm: 0.7,
            precip_in: 0.03,
            humidity: 88,
            cloud: 78,
            feelslike_c: 25.8,
            feelslike_f: 78.4,
            windchill_c: 23.6,
            windchill_f: 74.5,
            heatindex_c: 25.8,
            heatindex_f: 78.4,
            dewpoint_c: 21.5,
            dewpoint_f: 70.7,
            will_it_rain: 1,
            chance_of_rain: 86,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 13.9,
            gust_kph: 22.3,
            uv: 1.0,
          },
          {
            time_epoch: 1630274400,
            time: '2021-08-29 20:00',
            temp_c: 23.4,
            temp_f: 74.1,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 8.3,
            wind_kph: 13.3,
            wind_degree: 134,
            wind_dir: 'SE',
            pressure_mb: 1016.0,
            pressure_in: 30.01,
            precip_mm: 0.7,
            precip_in: 0.03,
            humidity: 88,
            cloud: 72,
            feelslike_c: 25.6,
            feelslike_f: 78.1,
            windchill_c: 23.4,
            windchill_f: 74.1,
            heatindex_c: 25.6,
            heatindex_f: 78.1,
            dewpoint_c: 21.3,
            dewpoint_f: 70.3,
            will_it_rain: 1,
            chance_of_rain: 86,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 14.1,
            gust_kph: 22.7,
            uv: 1.0,
          },
          {
            time_epoch: 1630278000,
            time: '2021-08-29 21:00',
            temp_c: 23.3,
            temp_f: 73.9,
            is_day: 0,
            condition: {
              text: 'Moderate or heavy rain shower',
              icon: '../../assets/images/world_dark.png',
              code: 1243,
            },
            wind_mph: 7.6,
            wind_kph: 12.2,
            wind_degree: 133,
            wind_dir: 'SE',
            pressure_mb: 1017.0,
            pressure_in: 30.02,
            precip_mm: 4.2,
            precip_in: 0.17,
            humidity: 88,
            cloud: 73,
            feelslike_c: 25.5,
            feelslike_f: 77.9,
            windchill_c: 23.3,
            windchill_f: 73.9,
            heatindex_c: 25.5,
            heatindex_f: 77.9,
            dewpoint_c: 21.3,
            dewpoint_f: 70.3,
            will_it_rain: 1,
            chance_of_rain: 87,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 7.0,
            vis_miles: 4.0,
            gust_mph: 13.4,
            gust_kph: 21.6,
            uv: 1.0,
          },
          {
            time_epoch: 1630281600,
            time: '2021-08-29 22:00',
            temp_c: 23.3,
            temp_f: 73.9,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 6.9,
            wind_kph: 11.2,
            wind_degree: 135,
            wind_dir: 'SE',
            pressure_mb: 1016.0,
            pressure_in: 30.01,
            precip_mm: 0.5,
            precip_in: 0.02,
            humidity: 88,
            cloud: 62,
            feelslike_c: 25.5,
            feelslike_f: 77.9,
            windchill_c: 23.3,
            windchill_f: 73.9,
            heatindex_c: 25.5,
            heatindex_f: 77.9,
            dewpoint_c: 21.2,
            dewpoint_f: 70.2,
            will_it_rain: 0,
            chance_of_rain: 60,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 11.9,
            gust_kph: 19.1,
            uv: 1.0,
          },
          {
            time_epoch: 1630285200,
            time: '2021-08-29 23:00',
            temp_c: 23.2,
            temp_f: 73.8,
            is_day: 0,
            condition: {
              text: 'Light rain shower',
              icon: '//cdn.weatherapi.com/weather/64x64/night/353.png',
              code: 1240,
            },
            wind_mph: 6.9,
            wind_kph: 11.2,
            wind_degree: 137,
            wind_dir: 'SE',
            pressure_mb: 1016.0,
            pressure_in: 30.0,
            precip_mm: 0.5,
            precip_in: 0.02,
            humidity: 89,
            cloud: 56,
            feelslike_c: 25.4,
            feelslike_f: 77.7,
            windchill_c: 23.2,
            windchill_f: 73.8,
            heatindex_c: 25.4,
            heatindex_f: 77.7,
            dewpoint_c: 21.2,
            dewpoint_f: 70.2,
            will_it_rain: 1,
            chance_of_rain: 76,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10.0,
            vis_miles: 6.0,
            gust_mph: 11.9,
            gust_kph: 19.1,
            uv: 1.0,
          },
        ],
      },
    ],
  },
});
