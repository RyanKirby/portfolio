/* Core */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavService } from '../../services/nav.service';


@Component({
	selector: 'side-bar',
	templateUrl: './side-bar.component.html'
})

export class SideBarComponent implements OnInit {
	constructor(private _nav:NavService){}

	@Input()  text:string;

	ngOnInit(){
		
	}

	go(path){
		this._nav.route(path);
	}
}
