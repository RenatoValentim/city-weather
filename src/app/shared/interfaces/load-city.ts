import { Observable } from 'rxjs';
import { CityModel } from '../models/city.model';

export interface LoadCity {
  loadBy(name: string): Observable<CityModel>;
}
