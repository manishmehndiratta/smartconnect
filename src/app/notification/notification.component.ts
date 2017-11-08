import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
