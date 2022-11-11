import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  styleUrls: ['./reminder-list.component.css']
})
export class ReminderListComponent implements OnInit {
  data = [
    {
      time : '5.45 am',
      activity : 'Wake up'
    },
    {
      time : '6 am',
      activity : 'Walk'
    },
    {
      time : '6.30 am',
      activity : 'Breakfast'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}