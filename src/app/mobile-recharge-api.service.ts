import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MobilePlan } from './mobile-plan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MobileRechargeAPIService {

  constructor(private client:HttpClient) { }

  getAllPlans():Observable<MobilePlan[]>{
    return this.client.get<MobilePlan[]>(environment.baseURL+'telecom');
  }
}
