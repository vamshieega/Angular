import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {

  sol1 : any;
  sol2 : any;
  sol3 : any;
  
  constructor() { }

  ngOnInit(): void {
    // this.sol1=localStorage.getItem("name");
    // this.sol2=localStorage.getItem("mobile no");
    // this.sol3=localStorage.getItem("mail id");
  }
  columnDefs  = [
    {headerName : "Name", field : "name" },
    {headerName : "Mobile No", field : "no" },
    {headerName : "E-Mail", field : "mail" },
    {headerName : "Selected Model", field : "car" },
    {headerName : "Location", field : "Location" }
    
  ];
rowData = [
  {name:localStorage.getItem("name"),
  no:localStorage.getItem("mobile no"),
  mail:localStorage.getItem("mail id"),
  car:localStorage.getItem("Car Type"),
  Location:localStorage.getItem("Location")}
];

removedata(){
  localStorage.removeItem("mail id")
  localStorage.removeItem("name")
  localStorage.removeItem("mobile no")
  localStorage.removeItem("Car Type") 
  localStorage.removeItem("Location") 
  window.location.reload(); 
}
}
