import { LocationsService } from './../../../shared/services/locations.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-detail-pages',
  templateUrl: './location-detail-pages.component.html',
  styleUrls: ['./location-detail-pages.component.scss']
})
export class LocationDetailPagesComponent implements OnInit {

  chaID: string;
  locationDetail: any = {};
  constructor(private route: ActivatedRoute, private locationService: LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
  const id = params.get('chaID');
  this.locationService.getLocation(id).subscribe(location => {this.locationDetail = location; });
});
}

}
