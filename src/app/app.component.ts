import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { NavService } from './services/nav.service';

import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
	selector: 'app-root',
	template: `
	<side-bar [(text)]="text"></side-bar>
	<div class="container">
		<div class="rs-con-wide">
			<router-outlet></router-outlet>
		</div>
	</div>
	`,
	styles: [],
	providers: [ApiService,NavService]
})
export class AppComponent implements OnInit{

	constructor(){}

	text:string = 'freelancer';
	add:boolean = false;
	words:string[] = ['full-stack developer','web developer','freelancer'];
	i:number = 0;
	open:boolean[] = [true, false];

	ngOnInit(){
		setTimeout(res => {
			this.changeText();
		}, 2000);
	}


	changeText(){
		if(!this.add){
			if(this.text.length > 0){
				setTimeout(res => {
					this.text = this.text.slice(0, -1)
					this.changeText();
				}, 100)
			} else {
				this.add = true;
				setTimeout(res => {
					this.changeText();
				},1500)
			}
		} else {
			if(this.text.length < this.words[this.i].length){
				setTimeout(res => {
					this.text = this.words[this.i].substring(0, this.text.length + 1);
					this.changeText();
				}, 100)
			} else {
				this.add = false;
				this.i = this.i + 1;
				if(this.i === 3){
					this.i = 0;
				}
				setTimeout(res => {
					this.changeText();
				},3000)
			}
		}
	}
}
