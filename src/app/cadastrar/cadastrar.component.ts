import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm, Validators, FormBuilder,FormsModule } from '@angular/forms';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent  {
 
  @ViewChild('stepper') stepper: any; // esse atributo é para uso de index nos steps
  hide = true; // Esse atributo é para revelar a senha

  aceitomesmo:number =0; // Esse atributo é para mudar o valor do slider
   /*injetar form control nos atributos e suas validações , essas validações baseadas no banco de dados*/
  renda = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(7)]);
  tipoUsuario = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(7)]);
  telefone = new FormControl ('', [ Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.minLength(11), Validators.maxLength(11)]);

  constructor() { }

 

  /*funcao para mover o step */
  move(index: number) {
    this.stepper.selectedIndex = index;
  }

    /*funcao que pega o valor do atributo renda e retorna direção*/
    testarRenda() {
      if (this.renda.value == 2) {
        Swal.fire({  
          icon: 'error',  
          title: 'Desculpe-nos',  
          text: 'Seu formulario não preenche os requisitos para ser Empreendedor'  
          
        }) 
        this.stepper.selectedIndex = 0;
      }
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
    if (this.tipoUsuario.hasError('required')) {
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



  /*funcao de mudança de valor do atributo com o click do mouse*/
  Mudando(event: any) {
    if (event.checked == true) {
      
      this.aceitomesmo = 1;
    } else {
      
      this.aceitomesmo = 0;
    }
  }

  /*funcao que muda de cor usando referencia do styles.scss*/
  get controlColor() {
    return this.nome.valid ? 'accent' : this.nome.invalid ? 'warn' : 'primary';
  }

  /*funcao que muda de cor usando referencia do styles.scss*/
  get controlColor1() {
    return this.email.valid ? 'accent' : this.email.invalid ? 'warn' : 'primary';
  }

  /*funcao que muda de cor usando referencia do styles.scss*/
  get controlColor2() {
    return this.telefone.valid ? 'accent' : this.telefone.invalid ? 'warn' : 'primary';
  }

  /*funcao que muda de cor usando referencia do styles.scss*/
  get controlColor3() {
    return this.senha.valid ? 'accent' : this.senha.invalid ? 'warn' : 'primary';
  }

  
  /*funcao que muda de cor usando referencia do styles.scss*/
  get controlColor4() {
    return this.tipoUsuario.valid ? 'accent' : this.tipoUsuario.invalid ? 'warn' : 'primary';
  }



}
