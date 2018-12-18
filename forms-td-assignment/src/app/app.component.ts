import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public subscriptions = [{ id: "1", name: "Basic" }, { id: "2", name: "Advanced" }, { id: "3", name: "Pro" }]

}
