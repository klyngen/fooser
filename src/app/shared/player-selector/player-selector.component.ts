import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BasicPlayerData } from '../model/player-data';

@Component({
  selector: 'shared-player-selector',
  templateUrl: './player-selector.component.html',
  styleUrls: ['./player-selector.component.scss'],
   providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlayerSelectorComponent),
      multi: true
    }
  ]
})
export class PlayerSelectorComponent implements OnInit, ControlValueAccessor {


  playerData: BasicPlayerData = new BasicPlayerData();

  constructor() {
    this.playerData.id = 'yay';
   }


  @Input() set playerId(id: string) {
    this.playerData.id = id;
  }

  ngOnInit(): void {
    console.log(this.playerData);
  }


  get playerIdValue() {
    return this.playerData.id;
  }

  set playerIdValue(val) {
    this.playerData.id = val;
    this.propagateChange(this.playerData.id);
  }

  writeValue(value: any) {
    this.playerData.id = value;
  }

  registerOnChange(fn: any) { }

  registerOnTouched(fn: any) { }

  propagateChange = (_: any) => {};
}
