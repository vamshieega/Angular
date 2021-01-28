import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes }from '@angular/router'; 
import {  UserdetailComponent} from './userdetail/userdetail.component';
import { UserinfoComponent} from './userinfo/userinfo.component'; 

export const routes : Routes = [  
    {path:'',component: UserdetailComponent}, 
    {path:'aggrid',component: UserinfoComponent}   
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [ RouterModule]  
})
export class LoanRoutingModule{}  