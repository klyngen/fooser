import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerSelectorComponent } from './player-selector/player-selector.component';
import { PlayersComponent } from '../players/players.component';



@NgModule({
  declarations: [PlayerSelectorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersComponent
  ]
})
export class SharedModule { }
