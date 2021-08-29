import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  loadBy(): Observable<any> {
    return of({})
  }
}
