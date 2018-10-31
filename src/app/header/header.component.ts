import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeader: string;
  logo: string;
  constructor() {
    this.majHeader = "Telecom Company";
    this.logo = "assets/images/logo_telecom.JPG";
  }

  ngOnInit() {
  }

}
