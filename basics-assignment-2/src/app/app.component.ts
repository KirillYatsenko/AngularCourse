import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public someText = "";

  public clearIsDisabled(): boolean {
    return this.someText == '';
  }

  public onClear(): void {
    this.someText = '';
  }
  
}