import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'core-secondarynav',
  templateUrl: './secondarynav.component.html',
  styleUrls: ['./secondarynav.component.scss']
})
export class SecondarynavComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }

  isActive(route: string) {
    console.log(this.router.parseUrl(this.router.url));
  }

}
