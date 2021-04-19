import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm, Validators, FormBuilder, FormsModule } from '@angular/forms';
import { User } from 'src/app/model/User';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from './../../../environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:User = new User()
  idUser:number
  confirmarSenha: string
  tipoUsuario: string
  hide:boolean = true
  imagemUsuario = environment.imagemUsuario

  
  aceitomesmo: number = 0; // Esse atributo é para mudar o valor do slider
  /*injetar form control nos atributos e suas validações , essas validações baseadas no banco de dados*/
  renda = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(100),
  ]);
  tipoS = new FormControl('', [Validators.required]);
  senha = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(7),
  ]);
  telefone = new FormControl('', [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
    Validators.minLength(11),
    Validators.maxLength(11),
  ]);


  constructor(
    private authService:AuthService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(){
    window.scroll(0, 0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoDeUsuario(event: any) {
    this.tipoUsuario = event.target.value;
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  atualizar() {

    if(this.user.senhaUsuario != this.confirmarSenha){
      Swal.fire({
        icon: 'error',
        title: 'Show',
        text: 'As senhas estão incorretas',
      });
    } else {
      this.authService.atualizar(this.user).subscribe((resp: User) => {
          this.user = resp
          this.router.navigate(['/login'])
          Swal.fire({
            icon: 'success',
            title: 'Show',
            text: 'Usuario atualizada com sucesso! Faça login novamente.',
          });

          environment.token = ''
          environment.nomeUsuario = ''
          environment.imagemUsuario = ''
          environment.idUsuario = 0
          environment.telefoneUsuario =''
          environment.emailUsuario =''
          environment.tipoUsuario =''

          this.router.navigate(['/login'])
      })
    }
  }


    /*funcao que muda de cor usando referencia do styles.scss*/
    get controlColor() {
      return this.nome.valid ? 'accent' : this.nome.invalid ? 'warn' : 'primary';
    }

    /*funcao que muda de cor usando referencia do styles.scss*/
    get controlColor1() {
      return this.email.valid
        ? 'accent'
        : this.email.invalid
        ? 'warn'
        : 'primary';
    }

    /*funcao que muda de cor usando referencia do styles.scss*/
    get controlColor2() {
      return this.telefone.valid
        ? 'accent'
        : this.telefone.invalid
        ? 'warn'
        : 'primary';
    }

    /*funcao que muda de cor usando referencia do styles.scss*/
    get controlColor3() {
      return this.senha.valid
        ? 'accent'
        : this.senha.invalid
        ? 'warn'
        : 'primary';
    }

    /*funcao que muda de cor usando referencia do styles.scss*/
    get controlColor4() {
      return this.tipoS.valid
        ? 'accent'
        : this.tipoS.invalid
        ? 'warn'
        : 'primary';
    }

    /*funcao de retorno de erros com o uso do parametro validators*/
  getErrorMessageRenda() {
    if (this.renda.hasError('required')) {
      return 'A renda é obrigatoria';
    }
    return null;
  }

  /*funcao de retorno de erros com o uso do parametro validators*/
  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'O email é obrigatiorio';
    }

    return this.email.hasError('email') ? 'Precisa ser um email válido' : '';
  }

  /*funcao de retorno de erros com o uso do parametro validators*/
  getErrorMessageNome() {
    if (this.nome.hasError('required')) {
      return 'O nome é obrigatorio';
    }
    return null;
  }

  /*funcao de retorno de erros com o uso do parametro validators*/
  getErrorMessageTipo() {
    if (this.tipoS.hasError('required')) {
      return 'O Tipo de usuario é obrigatorio';
    }
    return null;
  }

  /*funcao de retorno de erros com o uso do parametro validators*/
  getErrorMessageSenha() {
    if (this.senha.hasError('required')) {
      return 'A senha é obrigatoria';
    }
    return null;
  }
  /*funcao de retorno de erros com o uso do parametro validators*/
  getErrorMessageTelefone() {
    if (this.telefone.hasError('required')) {
      return 'O Telefone é obrigatorio';
    }
    return null;
  }
  }

