import { OnInit, ViewChild, AfterViewInit, ElementRef, Input, HostListener } from '@angular/core';
import { Component ,  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  show : boolean = false;
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

  
  // @HostListener('document:click', ['$event'])
  //   onclick(event: { target: { matches: (arg0: string) => any; }; }) {
  //       if(event.target.matches('.editor-div')) {
  //           alert('click to editor div')
  //       }
  //   }

  //   @HostListener('document:mouseover', ['$event'])
  //   mouseover(event: { target: { matches: (arg0: string) => any; }; }) {
  //       if(event.target.matches('.editor-div')) {
  //          this.show = !this.show;
      
  //       }
  //   }

  
}
