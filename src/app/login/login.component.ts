import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';
import{Router} from '@angular/router'
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin:UserLogin = new UserLogin()
  constructor(
    private auth:AuthService,
    private router: Router
  ) { }
  activeClass=false;

  ngOnInit()  {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) =>{
      this.userLogin = resp
      environment.token = this.userLogin.token
      environment.nomeUsuario = this.userLogin.nomeUsuario
      environment.imagemUsuario = this.userLogin.imagemUsuario
      environment.idUsuario = this.userLogin.idUsuario
      environment.telefoneUsuario = this.userLogin.telefoneUsuario
      environment.emailUsuario = this.userLogin.emailUsuario
      console.log(environment.token)
      console.log(environment.emailUsuario)
      this.router.navigate(['/userpage'])
    },erro =>{
        if(erro.status == 500){
          Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'usuario ou a senha estão incorretos!!'

          }) 

        }

    })

  }
  toggleClass(){
    this.activeClass=!this.activeClass
  }
}
