import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Counter } from './counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue= [12,6,78];
  constructor(private httpClient :HttpClient) { }
  url = 'https://lp4asgadot.herokuapp.com/counters/'
  reset(){
    this.initialValue=[0,0,0];
  }
  /* increment(position: number) : number{
    this.initialValue[position]++;
    return this.initialValue[position];
  }*/
   increment(id:number): Observable<Counter>{
    //this.httpClient.patch(this.url+id+".json",{"value" : 1}).subscribe();
    //return this.httpClient.get<Counter>(this.url+id+".json");
     return this.http.patch<Counter>(this.url + id + '.json', {});
  }
  decrement(position: number): number{
    this.initialValue[position]--;
    return this.initialValue[position];
  }
  resetOne(position: number): number{
    this.initialValue[position]=0;
    return this.initialValue[position];
  }
  getCounterValue(id :number) : Observable<Counter>{
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/"+id+".json");
  }
}
