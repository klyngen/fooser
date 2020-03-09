import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  playerCount = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Fetch the amount
      try {
        const amount = +params['players'];
        this.playerCount = amount;
      } catch {
        console.log("Number conversion issue");
      }
    })
  }

}
