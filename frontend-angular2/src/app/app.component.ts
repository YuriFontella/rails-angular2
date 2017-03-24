import { Component, EventEmitter, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	logged: boolean = this.loginService.online();

	constructor(private loginService: LoginService) { }

	ngOnInit() {
		this.loginService.event.subscribe(response => this.logged = response);
	}

	goodBye() {
		this.loginService.logout();
	}

}
