import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  sidename = "Tejaswi motors"
   sideinfo = "Provide your contact details for further communication related to Test Drive, EMI options"
   info = "A car consultant would get in touch with you shortly   "
   mailinfo = "Mean while you can provide your e-mail ID to receive the price-list purchase "
  showlocation: boolean = true;
  showuser: boolean = false;
  showmail:boolean=false;
  aggrid:boolean=false;
  names : any;
  _country:string='';
  constructor(public httpClient : HttpClient) { }
  public results =[];
  public url:string =  "https://www.carwale.com/api/v2/autocomplete/city/?term=" ; 
 
  search(country:any){
    console.log(country);
    this.httpClient.get(this.url+country) 
    .toPromise().then((data:any) =>{
      console.log(data);
      this.results = data;
    });
  }
 ngOnInit(){
 console.log(this.userdetails);

 }
 hidelocation(){
   this.showlocation=!this.showlocation;
   this.showuser=!this.showuser;
 }
 hideuser(){
   this.showmail=!this.showmail;  
   this.showuser=!this.showuser;
 }

reset(){
  localStorage.removeItem("name")
  localStorage.removeItem("mobile no")
  localStorage.removeItem("mail id")
}

userdetails(userinfo:NgForm){
this.names =  localStorage.setItem("name",userinfo.value.username1) 
  localStorage.setItem("mobile no",userinfo.value.mobno) 
  localStorage.setItem("Location",this._country)
  
  this.showmail=!this.showmail;  
   this.showuser=!this.showuser;
   this.names=localStorage.getItem("name");
} 
maildetails(mailform:NgForm){
  localStorage.setItem("mail id",mailform.value.mailid) 
  
  this.aggrid=!this.aggrid;
}
disable(){

}

}
