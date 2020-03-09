import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsComponent } from './stats/stats.component';
import { PlayersComponent } from './players/players.component';
import { MatchComponent } from './match/match.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RegisterComponent } from './match/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatsComponent,
    PlayersComponent,
    MatchComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MatIconModule,
    SharedModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
