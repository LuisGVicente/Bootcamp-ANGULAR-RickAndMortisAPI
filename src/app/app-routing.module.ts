import { LocationPageComponent } from './pages/location-page/location-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LocationDetailPagesComponent } from './pages/location-page/location-detail-pages/location-detail-pages.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'characters', component: CharactersPageComponent },
  {path: 'characters/:chaID', component: CharacterDetailPageComponent },
  {path: 'contact', component: ContactPageComponent },
  {path: 'favorites', component: FavoritesPageComponent },
  {path: 'locations/:chaID', component: LocationDetailPagesComponent },
  {path: 'locations', component: LocationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
