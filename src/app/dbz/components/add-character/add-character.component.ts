import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  // Creamos la instancia de nuestro emisor de eventos
  public onNewCharacter: EventEmitter<Character> = new EventEmitter

  public character: Character = {
    name:'abc',
    power:0
  }
  //Creamos el evento emitCharacter, cuando se de click al botón html
  // "Agregar"
  emitCharacter(): void{
    if(this.character.name.length === 0)return;
    this.onNewCharacter.emit(this.character);
    this.character = {name:'', power:0};
  }
}
