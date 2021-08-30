import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CityModel } from '../models/city.model';
import { LoadCity } from '../interfaces/load-city';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponseModel } from '../utils/external-api-models/response-api.model';
import { environment } from '../../../environments/environment';
import { cityAdapter } from '../utils/city.adapter';
import { map, tap } from 'rxjs/operators';
import { CITY_MOCK } from '../../../testing/mocks/city.mock';

@Injectable({
  providedIn: 'root',
})
export class CityService implements LoadCity {
  constructor(private readonly http: HttpClient) {}

  loadBy(name: string): Observable<CityModel> {
    const params = new HttpParams().set('q', name).set('api', 'no');

    // return of(CITY_MOCK)
    return this.http
      .get<ApiResponseModel>(environment.URL_API, { params })
      .pipe(map((responseApi) => cityAdapter(responseApi)), tap(console.log));
  }
}
