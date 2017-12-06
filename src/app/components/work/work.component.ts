/* Core */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from '../../services/nav.service';


@Component({
	selector: 'work',
	templateUrl: './work.component.html'
})

export class WorkComponent implements OnInit {

	constructor(private _nav:NavService){}

	nav:any=null;

	ngOnInit(){
		window.scrollTo(0, 0);
		this.nav = this._nav.pages();
	}
}
