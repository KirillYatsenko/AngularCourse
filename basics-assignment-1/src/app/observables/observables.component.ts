import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let myObservable = new Observable((observer) => {
      setInterval(() => { observer.next('lalala') }, 1000);
    }).subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
