/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { CityComponent } from './city.component';
import { CityService } from '../shared/services/city.service';
import { CITY_MOCK } from '../../testing/mocks/city.mock';
import { Observable, of } from 'rxjs';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { CityModel } from '../shared/models/city.model';
import { NgxLoadingModule } from 'ngx-loading';
import { By } from '@angular/platform-browser';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let activatedRoute: ActivatedRouteStub;
  let cityServiceSpy: LoadCity;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not loading before ngOnInit', () => {
    expect(component.isLoading).toBeFalse();
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

  it('should display a load component if component.isLoad equals true', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    const compiled = fixture.nativeElement as HTMLElement;
    const loading = compiled.querySelector('ngx-loading');
    expect(loading).toBeTruthy();
  });

  it('should display a default background-color / color', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main');
    expect(getComputedStyle(main!).backgroundColor).toEqual(
      'rgb(245, 245, 245)'
    );
    expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
  });

  it('should display a default image to load', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('main img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')?.includes('world_dark.png')).toBeTrue();
  });
});

class CityServiceSpy implements LoadCity {
  loadBy(name: string): Observable<CityModel> {
    return cold('--x|', { x: CITY_MOCK });
  }
}

interface LoadCity {
  loadBy(name: string): Observable<CityModel>;
}
