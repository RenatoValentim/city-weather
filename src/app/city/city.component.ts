import { Component, OnInit } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { ActivatedRoute } from 'src/testing/activated-route-stub';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  isLoading = false;
  city!: CityModel;
  cityName!: string | null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
  }
}
