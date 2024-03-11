import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public chacterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter();

  public deleteCharacterById(id?: string){

    if(!id) return;

    this.onDeleteById.emit(id);
  }

}
