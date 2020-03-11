import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'secu-app-front';

  constructor(
  ) {}

  ngOnInit(): void {
    console.log('> (secu-app) | init app');
  }
}
