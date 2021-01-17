import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {
  locationList;
  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((res: any) => this.locationList = res.results);
  }

}
