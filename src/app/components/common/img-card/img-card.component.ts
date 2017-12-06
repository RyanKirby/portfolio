/* Core */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'img-card',
	templateUrl: './img-card.component.html'
})

export class ImgCardComponent implements OnInit {
	@Input()  title:string;
	@Input()  className:string[];
	@Input()  content:string[];
	@Input()  img:string;
	@Input()  type:number;

	constructor(){}

	ngOnInit(){
		
	}
}
