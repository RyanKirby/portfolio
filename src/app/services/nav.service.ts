 import { Injectable } from '@angular/core';
 import { Subject }    from 'rxjs/Subject';

 import {Router} from '@angular/router';

@Injectable()
export class NavService {
 	constructor(private _router:Router){}

 	private PAGES:any = {
 		slideOut:false
 	}
// 
 	pages(){
 		return this.PAGES;
 	}

 	route(path){
 		// console.log(path);
 		this.PAGES.slideOut = true;
 		setTimeout(res => {
 			this.PAGES.slideOut = false;
 			this._router.navigateByUrl(path);
 		},1000);
 	}
 }
