import { CharactersService } from './../../../../shared/services/characters.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {

  chaID: string;
  characterDetail: any = {};
  constructor(private route: ActivatedRoute, private characterService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
  const id = params.get('chaID');
  this.characterService.getCharacter(id).subscribe(character => {this.characterDetail = character; });
});
}

}
