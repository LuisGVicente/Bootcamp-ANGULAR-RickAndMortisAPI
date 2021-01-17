import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  charactersList;
  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((res: any) => this.charactersList = res.results);
  }

}
