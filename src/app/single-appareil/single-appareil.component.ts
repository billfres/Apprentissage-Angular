import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string = 'Appareils';
  status: string = 'Status';

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['id'];
  }

}
