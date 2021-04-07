import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';
import Swal from 'sweetalert2';
import { ComentarioService } from '../service/comentario.service';
import { Comentario } from '../model/Comentario';

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
  tipoUsuario = environment.tipoUsuario
  
  postagem:Postagem = new Postagem()
  listaPostagens :Postagem[]
  tituloPost: string

  idTema :number
  listaTemas : Tema[]
  tema:Tema = new Tema()
  nomeTema: string

  user:User = new User()
  idUser = environment.idUsuario
  tipoA :string

  comentario: Comentario = new Comentario()
  listaComentarios: Comentario[]

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService:TemaService,
    private authService:AuthService,
    private comentarioService: ComentarioService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    if(environment.token == ''){
      this.router.navigate(['/login'])
    }

    this.getAllTemas()
    this.getAllPostagens()
  }
  tipoDeAjuda(event:any){
    this.tipoA = event.target.value
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp : Tema)=>{
      this.tema = resp

    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp:Postagem[])=>{
      this.listaPostagens = resp
      console.log(this.listaPostagens)
    }, err => {
      console.log(this.listaPostagens)
    })
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp:User)=>{
      this.user = resp
    })
  }
  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()

    }
    else{
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }
  findByNomeTema(){
    if(this.nomeTema == ''){
      this.getAllTemas()

    }
    else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }

  }


  publicar(){
    this.postagem.tipoAjudaPostagem = this.tipoA

    this.tema.idTema = this.idTema
    this.postagem.tema = this.tema

    this.user.idUsuario = this.idUser
    this.user.imagemUsuario = this.imagemUsuario
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp:Postagem)=>{
      this.postagem = resp
      Swal.fire({
        icon: 'success',
        title: 'Show',
        text: 'Postagem realizada com sucesso!',
      });
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
    
  }

  sair() {
    this.router.navigate(['/homepage'])
    environment.nomeUsuario = ''
    environment.emailUsuario = ''
    environment.idUsuario = 0
    environment.imagemUsuario = ''
    console.log(environment.token)
    console.log(environment.idUsuario)
    console.log(environment.nomeUsuario)
  }

  comentar(id: number){

    this.user.idUsuario = this.idUsuario;
    this.comentario.usuario = this.user;

    this.postagem.idPostagem = id;
    this.comentario.postagem = this.postagem;

    this.comentarioService.postComentario(this.comentario).subscribe((resp: Comentario) => {
      this.comentario = resp
      Swal.fire({
        icon: 'success',
        title: 'Show',
        text: 'Comentario realizado com sucesso!',
      });
      this.comentario = new Comentario();
      this.getAllPostagens();
    }, err => {
      console.log(this.comentario)
    })

  }

  findallComentarios(){
    this.comentarioService.getAllComentarios().subscribe((resp: Comentario[])=>{
      this.listaComentarios = resp
    })
  }
}
