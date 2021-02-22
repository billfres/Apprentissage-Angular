import { AppareilService } from './../services/appareil.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string | undefined;
  @Input() appareilStatus: string;
  @Input() indexOfAppareil: number;
  @Input() id: number;

  constructor( private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.indexOfAppareil);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.indexOfAppareil);
    }
  }
  // soit on commente les 2 fonctions en bas et on laisse la fonction onSwitch
 /* onSwitch(){
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }*/

}
