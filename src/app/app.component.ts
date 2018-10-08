import { OddComponent } from './assigment_1/odd/odd.component';
import { EvenComponent } from './assigment_1/even/even.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  private gameComponents = [];

  public onSecondPassed(counter: number) {
    if (counter % 2 == 0) {
      this.addEvenComponent(counter);
    } else {
      this.addOddComponent(counter);
    }
  }

  private addOddComponent(number: number) {
    this.gameComponents.push({
      'number': number,'type': 'odd'
    });
  }

  private addEvenComponent(number: number) {
    this.gameComponents.push({
      'number': number,'type': 'even'
    });
  }

}

