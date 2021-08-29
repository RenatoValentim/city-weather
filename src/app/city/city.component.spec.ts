/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { CityComponent } from './city.component';
import { CityService } from '../shared/services/city.service';
import { CITY_MOCK } from '../../testing/mocks/city.mock';
import { of } from 'rxjs';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let activatedRoute: ActivatedRouteStub;
  let cityServiceSpy: any;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(
    waitForAsync(() => {
      cityServiceSpy = jasmine.createSpyObj('CityService', ['loadBy']);
      activatedRoute.setParamMap({ cityName: 'Recife' });
      TestBed.configureTestingModule({
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
    expect(component.isLoading).toBeFalse();
  });

  it('should not loading before ngOnInit', () => {
    expect(component.isLoading).toBeFalse();
  });

  it('should NOT have city immediately after ngOnInit', () => {
    fixture.detectChanges();
    expect(component.city).toBeFalsy();
  });

  it('should have a city name on the router params after ngOnInit', (done: DoneFn) => {
    activatedRoute.paramMap.subscribe((value) => {
      expect(value).toBeTruthy();

      if (value.has('cityName')) {
        component.cityName = value.get('cityName');
        expect(component.cityName).toBe('Recife');
      }

      done();
    });
  });

  it('should get a city after ngOnInit', (done: DoneFn) => {
    activatedRoute.paramMap.subscribe((value) => {
      expect(value).toBeTruthy();

      if (value.has('cityName')) {
        component.cityName = value.get('cityName');
        expect(component.cityName).toBe('Recife');
      }

      component.city = cityServiceSpy.loadBy.and.returnValue(CITY_MOCK)();
      expect(component.city).toBeTruthy();
      done();
    });
  });
});
