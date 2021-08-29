/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { cold, getTestScheduler } from 'jasmine-marbles';
import { NgxLoadingModule } from 'ngx-loading';
import { Observable } from 'rxjs';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { CITY_MOCK } from '../../testing/mocks/city.mock';
import { CityModel } from '../shared/models/city.model';
import { CityService } from '../shared/services/city.service';
import { CityComponent } from './city.component';
import { delay } from 'rxjs/operators';
import { LoadCity } from '../shared/interfaces/load-city';

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

  // TODO: Verificar se é realmente necessário este teste
  xit('should display a loading component if component.isNotLoad equals true', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    const compiled = fixture.nativeElement as HTMLElement;
    component.isLoading = true;
    fixture.detectChanges();

    const loading = compiled.querySelector('ngx-loading');
    console.log(compiled);
    console.log(fixture.debugElement.nativeElement);
    expect(loading).toBeTruthy();
  });

  it('should display a default background-color / color', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    const compiled = fixture.nativeElement as HTMLElement;
    const main = compiled.querySelector('main');
    fixture.detectChanges();
    expect(getComputedStyle(main!).backgroundColor).toEqual(
      'rgb(245, 245, 245)'
    );
    expect(getComputedStyle(main!).color).toEqual('rgb(0, 0, 0)');
  });

  // TODO: Verificar se é realmente necessário este teste
  xit('should display a default image to load', () => {
    fixture.detectChanges();
    expect(component.isLoading).toBeTrue();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('main img');
    fixture.detectChanges();
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')?.includes('world_dark.png')).toBeTrue();
  });
});

class CityServiceSpy implements LoadCity {
  loadBy(name: string): Observable<CityModel> {
    return cold('--x|', { x: CITY_MOCK });
  }
}

