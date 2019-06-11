import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosDataService } from '../todo-list/todos-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
