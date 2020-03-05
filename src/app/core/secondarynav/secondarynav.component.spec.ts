import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarynavComponent } from './secondarynav.component';

describe('SecondarynavComponent', () => {
  let component: SecondarynavComponent;
  let fixture: ComponentFixture<SecondarynavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarynavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
