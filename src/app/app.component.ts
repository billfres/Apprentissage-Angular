import { Observable } from 'rxjs/Observable';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';
import'rxjs/Rx';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  constructor(){}

  ngOnInit(){
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error has occurred! : ' + error);
      },
      
      () => {
        console.log('Observable complete!');
      }
    );
    
  }

  //methode pour detruire l'observable
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }

  /*fonction anonyme ou indefinie
  () => {}
  */
}
