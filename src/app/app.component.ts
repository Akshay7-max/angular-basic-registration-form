import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  
  username: string = "";
  password: string = "";
  confpassword: string = "";
  acceptlicenseagreement: boolean = true;
  gender: string = "";
  country: string = "";
  msg: string = "";

  RegisterClick() {
    this.msg = "Username : "+this.username+"<br/>Password : "+this.password+"<br />Confirm Password : "+this.confpassword+"<br/>Accept License Agreement : "+this.acceptlicenseagreement+"<br/>Gender : "+this.gender
    +"<br/>Country : "+this.country;
  }
}
