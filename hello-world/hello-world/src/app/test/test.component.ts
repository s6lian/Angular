import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h1> This is test</h1>
  <h2>for inlined template</h2>` ,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
