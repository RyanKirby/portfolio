/* Core */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'card',
	templateUrl: './card.component.html'
})

export class CardComponent implements OnInit {
	@Input()  title:string;
	@Input()  content:string;
	@Input()  img:string;

	constructor(){}

	ngOnInit(){
		
	}
}
