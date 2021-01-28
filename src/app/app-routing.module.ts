import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { CrisisListComponent } from './crisis-list/crisis-list.component';

export const routes: Routes = [
  {
    path:'hundai',loadChildren:()=>import(`./loan/loan-routing.module`).then(m=>m.LoanRoutingModule)
  },
  {
    path:'', component: CrisisListComponent 
  } 
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
