/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';
import { CityComponent } from './city.component';
import { ActivatedRoute } from 'src/testing/activated-route-stub';
import { ParamMap } from '@angular/router';

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(
    waitForAsync(() => {
      activatedRoute.setParamMap({ cityName: 'Recife' });
      TestBed.configureTestingModule({
        declarations: [CityComponent],
        providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
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

  it('should have a city nama on the router params after ngOnInit', (done: DoneFn) => {
    activatedRoute.paramMap.subscribe((value) => {
      expect(value).toBeTruthy();

      if (value.has('cityName')) {
        component.cityName = value.get('cityName');
        expect(component.cityName).toBe('Recife');
      }

      done();
    });
  });
});
