 import { Injectable } from '@angular/core';
 import { Headers, Http } from '@angular/http';
 import { Subject }    from 'rxjs/Subject';
 import 'rxjs/add/operator/toPromise';

 @Injectable()
 export class ApiService {

 // 	// private url = `http://localhost:7781/api/`;
 // 	private url = `https://xperior.co/api/`;
 // 	// private url = `https://dev.xperior.co/api/`;

 // 	constructor(private http: Http) {}

 // 	email(name,email,message){
 // 		var headers = this.getHeader();
 // 		const url = this.url + `email`;

 // 		return this.http.post(url, {name:name,email:email,message:message}, { headers: headers }).toPromise()
 // 		.then(response => {
 // 			// console.log(response.json())
 // 			return response.json();
 // 		})
 // 		.catch(err => {
 // 			console.log(err);
 // 		});
 // 	}

 // 	callback(name,email,number){
 // 		var headers = this.getHeader();
 // 		const url = this.url + `callback`;

 // 		return this.http.post(url, {name:name,email:email,number:number}, { headers: headers }).toPromise()
 // 		.then(response => {
 // 			// console.log(response.json())
 // 			return response.json();
 // 		})
 // 		.catch(err => {
 // 			console.log(err);
 // 		});
 // 	}

	// private getHeader(){
	// 	var headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');
	// 	return headers;
	// }
}
