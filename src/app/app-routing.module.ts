import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'form', 
    pathMatch: 'full' 
  },
  { 
    path: 'heroes', 
    component:DataComponent
  },
  
  {
    path:'form',
    component:ReactiveFormComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
