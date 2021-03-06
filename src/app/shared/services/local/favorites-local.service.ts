import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesLocalService {
  private favorites = [];
  
  constructor() { }

    addFavorite(newFavorite){
      this.favorites.push(newFavorite);
    }
    getFavorites(){
      return this.favorites;
    }
}
