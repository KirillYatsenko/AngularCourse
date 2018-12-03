import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showParagraph = false;
  public clicks: string[] = [];

  public onChangeParagraphVisibility() {
    this.showParagraph = !this.showParagraph;
    this.clicks.push(new Date().toString());
  }
}