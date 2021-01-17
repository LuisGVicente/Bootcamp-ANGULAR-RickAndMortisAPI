import { FavoritesLocalService } from './../../shared/services/local/favorites-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favorites: any = [];
  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesLocalService.getFavorites();
  }

}
