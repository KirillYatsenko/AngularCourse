import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('second-passed') secondPassedEvent = new EventEmitter<any>();

  private timer;
  private counter: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public onStartGame() {
    this.timer = setInterval(() => {
      this.counter += 1;
      this.secondPassedEvent.emit(this.counter);
    }, 1000);
  }

  public onStopGame(){
    clearInterval(this.timer);
  }

}
