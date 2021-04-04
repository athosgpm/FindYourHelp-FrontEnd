import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost:number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService
    
  ) { }

  ngOnInit(){
    window.scroll(0,0)
    if (environment.token === ''){

      this.router.navigate(['/entrar']);
    }
    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
    
  }

  findByIdPostagem(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp:Postagem)=>{
      this.postagem = resp
    })
  }

  
  apagar() {
    this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
      alert('Essa postagem foi deletado com sucesso')
      this.router.navigate(['/userpage'])
    })
  }
}