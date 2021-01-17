import { FavoritesLocalService } from './../../services/local/favorites-local.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
@Input() charactersList;
@Input() url = 'characters';
  constructor(private favoritesLocalService: FavoritesLocalService) { }

  ngOnInit(): void {
  }
  addFavorites(i){
    this.favoritesLocalService.addFavorite(i);
  }

}
