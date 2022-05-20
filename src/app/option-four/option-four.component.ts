import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-option-four',
  templateUrl: './option-four.component.html',
  styleUrls: ['./option-four.component.css'],
})
export class OptionFourComponent implements OnInit {
  counter = interval(500);
  renderCounter: any;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getConfig = (): Observable<any> => {
    return this.http
      .get<any>(`https://jsonplaceholder.typicode.com/posts/8`)
      .pipe();
  };

  handleSubscribe() {
    this.getConfig().subscribe((res) => {
      this.renderCounter = res.title;
    });
  }

  handleUnsubscribe() {}
}
