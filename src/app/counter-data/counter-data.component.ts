import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';
import { Counter } from '../counter';

@Component({
  selector: 'app-counter-data',
  templateUrl: './counter-data.component.html',
  styleUrls: ['./counter-data.component.css']
})
export class CounterDataComponent implements OnInit {

  @Input() position: number;
  counter: Counter = new Counter();

  constructor(public counterService: CounterService) { }

  ngOnInit() {
    this.getOneCounter();
  }

  getOneCounter() {
    this.counterService.getOneCounter(this.position)
      .subscribe(counter => {
        this.counter = counter;
      });
  }


  increment() {
    this.counterService.increment(this.counter.id)
      .subscribe(counter => {
        this.counter.value = counter.value;
      });
  }

}