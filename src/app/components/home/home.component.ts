/* Core */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from '../../services/nav.service';


@Component({
	selector: 'home',
	templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

	constructor(private _nav:NavService){}

	nav:any=null;

	ngOnInit(){
		window.scrollTo(0, 0);
		this.nav = this._nav.pages();
	}
}
