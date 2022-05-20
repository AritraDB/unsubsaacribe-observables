import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-option-one',
  templateUrl: './option-one.component.html',
  styleUrls: ['./option-one.component.css'],
})
export class OptionOneComponent implements OnInit {
  counter = interval(500);
  renderCounter: any;
  subscription: Subscription;
  constructor() {}

  ngOnInit(): void {}

  handleSubscribe() {
    this.subscription = this.counter.subscribe((res) => {
      this.renderCounter = res;
    });
  }

  handleUnsubscribe() {
    this.subscription.unsubscribe();
  }
}
