import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailComponent } from './loan/userdetail/userdetail.component';
import { UserinfoComponent } from './loan/userinfo/userinfo.component';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule  } from 'ag-grid-angular';  
import {HttpClientModule} from '@angular/common/http';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { LoanRoutingModule } from './loan/loan-routing.module';
 // chips
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  declarations: [
    AppComponent, 
    UserdetailComponent,
    UserinfoComponent,  
    CrisisListComponent,
    HeroesListComponent 
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(),
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent},
      {path: 'hundai', component:LoanRoutingModule},
      {path: 'hundai/aggrid ', component:UserinfoComponent},
      // {path: '', redirectTo: '/heroes-list', pathMatch: 'full'},  it will default redirect to heroes page
    ]),
    AppRoutingModule, 
    CommonModule, 
    MatSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    NgbModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
