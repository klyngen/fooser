import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder) {
  }

  isLinear = true;

  playerCount = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Fetch the amount
      try {
        const amount = +params['players'];
        this.playerCount = amount;
      } catch {
        console.log('Number conversion issue');
      }
    });

    this.firstFormGroup = this.builder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.builder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.builder.group({
      blueslider: ['', Validators.required],
      redslider: ['', Validators.required]
    });
  }

}
