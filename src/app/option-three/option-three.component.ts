import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-option-three',
  templateUrl: './option-three.component.html',
  styleUrls: ['./option-three.component.css'],
})
export class OptionThreeComponent implements OnInit {
  counter = interval(500);
  renderCounter: any;

  constructor() {}
  ngOnInit(): void {}

  handleSubscribe() {
    this.counter.pipe(first()).subscribe((res) => {
      this.renderCounter = res;
    });
  }

  handleUnsubscribe() {}
}
