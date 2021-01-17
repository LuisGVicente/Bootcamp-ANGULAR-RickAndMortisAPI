import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MenuComponent } from './core/menu/menu.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CharactersPageComponent } from './pages/characters-page/characters-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { CharacterDetailPageComponent } from './pages/characters-page/pages/character-detail-page/character-detail-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LocationDetailPagesComponent } from './pages/location-page/location-detail-pages/location-detail-pages.component';
import { MultiplyPipe } from './shared/pipes/multiply.pipe';
import { PriorityNamePipe } from './shared/pipes/priority-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    LocationPageComponent,
    ContactPageComponent,
    CharactersPageComponent,
    GalleryComponent,
    CharacterDetailPageComponent,
    FavoritesPageComponent,
    LocationDetailPagesComponent,
    MultiplyPipe,
    PriorityNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
