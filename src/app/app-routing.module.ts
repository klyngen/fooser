import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchComponent } from './match/match.component';
import { StatsComponent } from './stats/stats.component';
import { PlayersComponent } from './players/players.component';


const routes: Routes = [
  {path: 'match', component: MatchComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'players', component: PlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
