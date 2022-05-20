import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-option-two',
  templateUrl: './option-two.component.html',
  styleUrls: ['./option-two.component.css'],
})
export class OptionTwoComponent implements OnInit {
  counter = interval(500);
  renderCounter: any;

  subscription = new Subject();

  constructor() {}
  ngOnInit(): void {}

  handleSubscribe() {
    this.counter.pipe(takeUntil(this.subscription)).subscribe((res) => {
      this.renderCounter = res;
    });
  }

  handleUnsubscribe() {
    this.subscription.next(true);
    this.subscription.complete();
  }
}
