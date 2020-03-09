import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  quotes = [
    'Dette møtet kan virkelig ikke vente',
    'Har du virkelig ventet så lenge på å spille foos?!',
    'Fort!! Før sjefen legger merke til alt du ikke har gjort',
    'De neste 10 minuttene lager du ingen bugs. Bare god stemning',
    'Det mest produktive du gjør i løpet av dagen',
    'func spillFoos() {return nerd + nerd + bord}',
    'Skal du sluntre unna jobb? Bra',
    'Koden går ikke ut i prod før om lenge uansett',
    'Du kan ikke ta en røykepause når du ikke røyker. Spill foos!'
  ];

  quote: string = 'Spydig quote';

  constructor(private router: Router) {
    // Select quote
    const quoteIndex = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[quoteIndex];
   }

   register(value: number) {
    this.router.navigateByUrl(`/match/register?players=${value}`);
   }

  ngOnInit(): void {
  }

}
