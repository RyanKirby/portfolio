/* Core */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from '../../services/nav.service';


@Component({
	selector: 'tech',
	templateUrl: './tech.component.html'
})

export class TechComponent implements OnInit {

	constructor(private _nav:NavService){}

	nav:any=null;

	ngOnInit(){
		window.scrollTo(0, 0);
		this.nav = this._nav.pages();
	}
}
