import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSelectorComponent } from './player-selector/player-selector.component';



@NgModule({
  declarations: [PlayerSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlayerSelectorComponent
  ]
})
export class SharedModule { }
