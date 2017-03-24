import { Component, OnInit, EventEmitter } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	name = localStorage.getItem('name');

  constructor() { }

  ngOnInit() { }

}
