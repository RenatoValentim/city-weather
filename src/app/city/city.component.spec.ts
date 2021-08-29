/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { NgxLoadingModule } from 'ngx-loading';
import { Observable } from 'rxjs';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { CITY_MOCK } from '../../testing/mocks/city.mock';
import { LoadCity } from '../shared/interfaces/load-city';
import { CityModel } from '../shared/models/city.model';
import { CityService } from '../shared/services/city.service';
import { CityComponent } from './city.component';

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

  xit('should display the correctly background-color to weather code sunny', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();

    expect(getComputedStyle(main!).backgroundColor).toEqual(
      'rgb(87, 203, 220)'
    );

    expect(getComputedStyle(main!).color).toEqual('rgb(255, 255, 255)');
  });

  xit('should display the correctly background-color if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');

    expect(getComputedStyle(main!).backgroundColor).toEqual(
      'rgb(245, 245, 245)'
    );

    expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
  });

  xit('should display the correctly arrow button to weather code sunny', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelector('section button img')
      ?.getAttribute('src');

    expect(imagePath?.includes('arrow_left_white.png')).toBeTrue();
  });

  xit('should display the correctly arrow button if code no register into the app', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelector('section button img')
      ?.getAttribute('src');

    expect(imagePath?.includes('arrow_left_dark.png')).toBeTrue();
  });

  xit('should display the correctly background-color to weather rain', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();
    const imagePath = main
      ?.querySelector('section button img')
      ?.getAttribute('src');

    expect(getComputedStyle(main!).backgroundColor).toEqual('rgb(60, 67, 83)');

    expect(getComputedStyle(main!).color).toEqual('rgb(255, 255, 255)');
  });

  it('should display the correctly background-color to weather snowy', () => {
    fixture.detectChanges();
    getTestScheduler().flush();
    cityServiceSpy.loadBy('Recife');
    fixture.detectChanges();

    expect(getComputedStyle(main!).backgroundColor).toEqual(
      'rgb(166, 166, 166)'
    );

    expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
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
});

class CityServiceSpy implements LoadCity {
  loadBy(name: string): Observable<CityModel> {
    return cold('--x|', { x: CITY_MOCK });
  }
}
