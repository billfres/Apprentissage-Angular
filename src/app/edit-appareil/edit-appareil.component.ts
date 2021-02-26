import { Router } from '@angular/router';
import { AppareilService } from './../services/appareil.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = 'éteint';

  //injection( creation des variables de types Router et AppareilService) du Router et AppareilService
  constructor(private appareilService: AppareilService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
}

}
