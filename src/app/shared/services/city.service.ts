import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CITY_MOCK } from '../../../testing/mocks/city.mock';
import { CityModel } from '../models/city.model';
import { LoadCity } from '../interfaces/load-city';

@Injectable({
  providedIn: 'root',
})
export class CityService implements LoadCity {
  constructor() {}

  loadBy(name: string): Observable<CityModel> {
    return of(CITY_MOCK)
  }
}
