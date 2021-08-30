/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { NgxLoadingModule } from 'ngx-loading';
import { Observable } from 'rxjs';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { LoadCity } from '../shared/interfaces/load-city';
import { CityModel } from '../shared/models/city.model';
import { CityService } from '../shared/services/city.service';
import { CityComponent } from './city.component';
import { CITY_MOCK } from '../../testing/mocks/city.mock';
import { WEATHER_CONDITION_CODE } from './city.component.config';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let activatedRoute: ActivatedRouteStub;
  let cityServiceSpy: LoadCity;
  let compiled: HTMLElement;
  let main: HTMLElement | null;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(
    waitForAsync(() => {
      cityServiceSpy = new CityServiceSpy();
      activatedRoute.setParamMap({ cityName: 'Recife' });
      TestBed.configureTestingModule({
        imports: [NgxLoadingModule.forRoot({})],
        declarations: [CityComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRoute },
          { provide: CityService, useValue: cityServiceSpy },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    main = compiled.querySelector('main');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should loading before ngOnInit', () => {
    expect(component.isLoading).toBeTrue();
  });

  it('should NOT have city immediately after ngOnInit', () => {
    fixture.detectChanges();
    expect(component.city).toBeFalsy();
    expect(component.isLoading).toBeTrue();
  });

  it('should have a city name on the router params after ngOnInit', (done: DoneFn) => {
    fixture.detectChanges();
    activatedRoute.paramMap.subscribe((value) => {
      expect(value).toBeTruthy();

      if (value.has('cityName')) {
        component.cityName = value.get('cityName');
        expect(component.cityName).toBe('Recife');
      }

      done();
    });
  });

  it('should get a city after ngOnInit', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    getTestScheduler().flush();
    activatedRoute.paramMap.subscribe((params) => {
      if (params.has('cityName')) {
        component.cityName = params.get('cityName');
        cityServiceSpy.loadBy(component.cityName!);
        expect(component.city).toBeTruthy();
        expect(component.isLoading).toBeFalse();
      }
    });
  });

  it('should display a default background-color / color', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    fixture.detectChanges();
    expect(getComputedStyle(main!).backgroundColor).toEqual(
      'rgb(245, 245, 245)'
    );
    expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
  });

  it('should display the correctly background-color to weather code sunny', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();

    if (isClear(component)) {
      expect(getComputedStyle(main!).backgroundColor).toEqual(
        'rgb(87, 203, 220)'
      );

      expect(getComputedStyle(main!).color).toEqual('rgb(255, 255, 255)');
    }
  });

  it('should display the correctly background-color if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');

    if (notFoundCod(component)) {
      expect(getComputedStyle(main!).backgroundColor).toEqual(
        'rgb(245, 245, 245)'
      );

      expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
    }
  });

  it('should display the correctly arrow button to weather code sunny', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelector('section button img')
      ?.getAttribute('src');

    if (isClear(component)) {
      expect(imagePath?.includes('arrow_left_white.png')).toBeTrue();
    }
  });

  it('should display the correctly arrow button if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelector('section button img')
      ?.getAttribute('src');

    if (notFoundCod(component)) {
      expect(imagePath?.includes('arrow_left_dark.png')).toBeTrue();
    }
  });

  it('should display the correctly background-color to weather rain', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();

    if (isRain(component)) {
      expect(getComputedStyle(main!).backgroundColor).toEqual(
        'rgb(60, 67, 83)'
      );

      expect(getComputedStyle(main!).color).toEqual('rgb(255, 255, 255)');
    }
  });

  it('should display the correctly background-color to weather snowy', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();

    if (isSnowy(component)) {
      expect(getComputedStyle(main!).backgroundColor).toEqual(
        'rgb(166, 166, 166)'
      );

      expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
    }
  });

  it('should display a correctly city name', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();

    expect(component.cityName).toBe(
      compiled.querySelector('section div h1')?.textContent!
    );
  });

  it('should display a correctly city weather', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();

    expect(component.city.currentWeatherCondition.condition).toBe(
      compiled.querySelector('section div h2')?.textContent!
    );
  });

  it('should display a correctly city temperature', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();

    let currentTemperature: string | null | undefined;
    if (main) {
      currentTemperature = main.querySelector(
        'section section div span'
      )?.textContent;
    }

    expect(component.city.currentWeatherCondition.currentTemperature).toBe(
      +currentTemperature!
    );
  });

  it('should display a correctly arrow top on the max temperature when weather code snow', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(1)
      .querySelectorAll('section div')
      .item(2)
      .querySelector('img')
      ?.getAttribute('src');

    if (isSnowy(component)) {
      expect(imagePath?.includes('arrow_top_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly arrow top on the max temperature if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(1)
      .querySelectorAll('section div')
      .item(2)
      .querySelector('img')
      ?.getAttribute('src');

    if (notFoundCod(component)) {
      expect(imagePath?.includes('arrow_top_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly arrow top on the min temperature when weather code snow', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(1)
      .querySelectorAll('section div')
      .item(3)
      .querySelector('img')
      ?.getAttribute('src');

    if (isSnowy(component)) {
      expect(imagePath?.includes('arrow_down_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly arrow top on the min temperature if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(1)
      .querySelectorAll('section div')
      .item(3)
      .querySelector('img')
      ?.getAttribute('src');

    if (notFoundCod(component)) {
      expect(imagePath?.includes('arrow_down_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly default middle icon', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section img')
      .item(3)
      .getAttribute('src');

    if (notFoundCod(component)) {
      expect(imagePath?.includes('world_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly middle icon when to be sunny', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section img')
      .item(3)
      .getAttribute('src');

    if (isClear(component) && isDay(component.city.currentWeatherCondition.time)) {
      expect(imagePath?.includes('sun_white.png')).toBeTrue();
    }
  });

  it('should display a correctly middle icon when to be rain at day', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section img')
      .item(3)
      .getAttribute('src');

    if (
      isRain(component) &&
      isDay(component.city.currentWeatherCondition.time)
    ) {
      expect(imagePath?.includes('sun_rain_white.png')).toBeTrue();
    }
  });

  it('should display a correctly middle icon when to be rain at night', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section img')
      .item(3)
      .getAttribute('src');

    if (
      isRain(component) &&
      !isDay(component.city.currentWeatherCondition.time)
    ) {
      expect(imagePath?.includes('moon_rain_white.png')).toBeTrue();
    }
  });

  it('should display a correctly middle icon when to be snowy at day', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section img')
      .item(3)
      .getAttribute('src');

    if (
      isSnowy(component) &&
      isDay(component.city.currentWeatherCondition.time)
    ) {
      expect(imagePath?.includes('sun_snowy_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly middle icon when to be snowy at night', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section img')
      .item(3)
      .getAttribute('src');

    if (
      isSnowy(component) &&
      !isDay(component.city.currentWeatherCondition.time)
    ) {
      expect(imagePath?.includes('moon_snowy_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly forecast shit', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    fixture.detectChanges();

    let shift: string | null | undefined;
    if (main) {
      shift = main
        ?.querySelectorAll('section')
        .item(2)
        .querySelector('div .forecasts div span')
        ?.textContent?.trim();
    }

    expect(component.city.forecastDay[0].shift).toEqual(shift!);
  });

  it('should display a correctly icon when to be snowy at day', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(2)
      .querySelector('div .forecasts div img')
      ?.getAttribute('src');

    if (
      isSnowy(component) &&
      isDay(component.city.currentWeatherCondition.time)
    ) {
      expect(imagePath?.includes('sun_snowy_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly icon if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(2)
      .querySelector('div .forecasts div img')
      ?.getAttribute('src');

    if (notFoundCod(component)) {
      expect(imagePath?.includes('world_dark.png')).toBeTrue();
    }
  });

  it('should display a correctly forecast icon when to be snowy at night', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelectorAll('section')
      .item(2)
      .querySelector('div .forecasts div img')
      ?.getAttribute('src');

    if (
      isSnowy(component) &&
      !isDay(component.city.currentWeatherCondition.time)
    ) {
      expect(imagePath?.includes('moon_snowy_dark.png')).toBeTrue();
    }
  });
});

class CityServiceSpy implements LoadCity {
  loadBy(name: string): Observable<CityModel> {
    return cold('--x|', { x: CITY_MOCK });
  }
}

function isClear(component: CityComponent): boolean {
  return (
    component.city.currentWeatherCondition.code === WEATHER_CONDITION_CODE.SUNNY_OR_CLEAR_NIGHT
  );
}

function isRain(component: CityComponent): boolean {
  return (
    component.city.currentWeatherCondition.code === WEATHER_CONDITION_CODE.RAIN
  );
}

function isSnowy(component: CityComponent): boolean {
  return (
    component.city.currentWeatherCondition.code === WEATHER_CONDITION_CODE.SNOW
  );
}

function notFoundCod(component: CityComponent): boolean {
  return !Object.values(WEATHER_CONDITION_CODE).includes(
    component.city.currentWeatherCondition.code
  );
}

function isDay(time: string): boolean {
  const currentHour = new Date(time).getHours();

  return currentHour > 5 && currentHour < 18;
}
