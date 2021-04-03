import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

    nomeUsuario = environment.nomeUsuario
    emailUsuario = environment.emailUsuario
    idUsuario = environment.idUsuario
    imagemUsuario = environment.imagemUsuario


  constructor() { }

  ngOnInit() {
  }

}
