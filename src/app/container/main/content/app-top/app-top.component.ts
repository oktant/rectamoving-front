import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-top',
  templateUrl: './app-top.component.html',
  styleUrls: ['./app-top.component.css']
})
export class AppTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  registerCarrier(){
    console.log('registercarrier');
  }

  registerShipper(){
    console.log('registershipper');

  }

  loginCarrier(){
    console.log('logincarrier');

  }
  loginShipper(){
    console.log('loginshipper');
  }

}
