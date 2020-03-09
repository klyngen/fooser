import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  quotes = [
    'Der utviklere blir til menn',
    'Fordi debugging er kjett',
    'Elwin kan ta seg en bolle',
    'Når dagen blir litt for lang',
    'Der Bent taper mot Martin',
    'Når poweroffice blir for vanskelig',
    'Det finnes bare en ting å gjøre etter lunsj',
    'Noen vil si at det gjør oss effektive',
    'Som om håndleddene trenger mere trening',
    'Gjør kolleger til fiender'
  ];

  quote: string = 'Spydig quote';

  constructor() {
    // Select quote
    const quoteIndex = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[quoteIndex];
   }


  ngOnInit(): void {
  }

}
