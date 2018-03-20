import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`<h2>
              welcome! {{name}}
            </h2>
            <input #myInput type="text">
            <button (click)="logMessage(myInput.value)">Log</button>

          <h3 class="text-success">Code test!
          </h3>
          <h4 [class]="textSucess">Class Binding!</h4>
          <h4 class="text-special" [class]="textSucess">Guess the effect?</h4>
          <h3 [class.text-danger]="is_error"> Dangerous! </h3>
          <h2 [ngClass]="messageClasses"> Which class is selected? Red for danger,
          green for success and italic for special! </h2>
          <h3 [style.color]="is_error? 'red':'green'">style Binding!</h3>
          <h3 [ngStyle]="titleStyles"> Style Binding </h3>
              `,
  styles:[`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style: italic;
    }

    `]
})
export class TestComponent implements OnInit {

  public name = "Fiona";
  public greeting = "";
  public myId = "testId";
  public is_disabled = false;
  public textSucess = "text-success";
  public is_error=false;
  public is_special = true;
  public messageClasses = {
    "text-success": !this.is_error,
    "text-danger": this.is_error,
    "text-special":this.is_special

  }
  public titleStyles = {
    color: "green",
    fontStyle: "italic"

  }
  // public siteurl = window.location.href;
  constructor() { }

  ngOnInit() {
  }
  logMessage(value){
    console.log(value);
  }
  // onClick(event){
  //   this.greeting=event.type;
  //   console.log(event);
  // }
  // greetUser( ){
  //    return "Hello " + this.name;
  // }

}
