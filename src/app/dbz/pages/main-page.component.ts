import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Inyección de Dependencias
  constructor(private dbzService: DbzService){}

  get characters(): Character[]{
    //Spread o propagación
    return [...this.dbzService.characters];
  }


  onDeleteCharacter(id:string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character){
    this.dbzService.addCharacter(character);
  }

}

//!Para los servicios en notas de la presentacion de servicios se dejo una explicacion del ayudante del profe
