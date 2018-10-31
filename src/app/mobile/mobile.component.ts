import { Component, OnInit } from '@angular/core';
import { MobileRechargeAPIService } from '../mobile-recharge-api.service';
import { MobilePlan } from '../mobile-plan';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  planList:MobilePlan[] = [];
  constructor(private service:MobileRechargeAPIService) { }

  ngOnInit() {
    this.service.getAllPlans().subscribe(data => this.planList=data, err => console.log(err));
  }

}
