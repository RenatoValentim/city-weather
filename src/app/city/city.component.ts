import { Component, OnInit } from '@angular/core';
import { CityModel } from '../shared/models/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  isLoading = false;
  city!: CityModel;

  constructor() {}

  ngOnInit() { }
}
