import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from '../components/home/home.component';
import { WorkComponent }   from '../components/work/work.component';
import { TechComponent }   from '../components/tech/tech.component';


const routes: Routes = [
{ path: '',  component: HomeComponent },
{ path: 'work',  component: WorkComponent, pathMatch: 'full'},
{ path: 'tech',  component: TechComponent, pathMatch: 'full'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}