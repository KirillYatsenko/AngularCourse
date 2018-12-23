import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public subscriptions = [{ id: "1", name: "Basic" }, { id: "2", name: "Advanced" }, { id: "3", name: "Pro" }]
  public defaultSubscriptionId = "2";

  public onSubmit(form: NgForm){
    console.log(form.value);
  }
}
