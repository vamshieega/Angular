import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {

  public isCollapsed = true;  
  car : any;
  constructor() { }

  ngOnInit(): void {
  }
  nexon(){
    this.car="Nexon"; 
    localStorage.setItem("Car Type",this.car) 
  }

  desire(){
    this.car="Shift Desire"; 
    localStorage.setItem("Car Type",this.car) 
  }

}
