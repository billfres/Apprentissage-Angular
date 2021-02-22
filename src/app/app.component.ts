import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import'rxjs/Rx';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  secondes: number;

  constructor(){}

  ngOnInit(){
    const counter = Observable.interval(1000);
    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error: any) => {
        console.log('Uh-oh, an error  has occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }
}
