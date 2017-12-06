/* Core */
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
	selector: 'slide-button',
	templateUrl: './slide-button.component.html'
})

export class SlideButtonComponent implements OnInit {
	@Input()  title:string;
	@Input()  type:number;
	@Input()  left:boolean;

	className:string='';

	constructor(){}

	ngOnInit(){
		switch (this.type) {
			case 0:
				this.className = 'sl-bt-one';
				break;
			case 1:
				this.className = 'sl-bt-two';
				break;
			case 2:
				this.className = 'sl-bt-four';
				break;
			default:
				this.className = 'sl-bt-one';
				break;
		}
	}
}
