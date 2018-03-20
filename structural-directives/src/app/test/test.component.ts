import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>  {{"hi " + name1}} </h2>
    <button (click)="fireEvent()">Send Event </button>
    <h2> {{ person | json }} </h2>

    <h2>{{5.678 | number:'1.2-3' }} </h2>
    <h2>{{5.678 | number:'3.4-5' }} </h2>
    <h2>{{5.678 | number:'3.1-2' }} </h2>
    <h2>{{0.23 | percent}}</h2>
    <h2>{{0.23 | currency:'EUR'}}</h2>
    <h2>{{date}}</h2>
    <h2>{{date|date:'short'}}</h2>
    <h2>{{date|date:'shortDate'}}</h2>
    <h2>{{date|date:'shortTime'}}</h2>
    `,

  styles: []
})
export class TestComponent implements OnInit {
  public person = {"firstName": "John",
"lastName": "Doe"};
  @Input("parentData") public name1;
  @Output() public childEvent = new EventEmitter();

  public date = new Date();


  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey I come from child component!');
  }

}
