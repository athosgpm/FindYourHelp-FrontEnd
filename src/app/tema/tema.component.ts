import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

tema: Tema= new Tema()
listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService

    ) { }

  ngOnInit() {
    if(environment.token == '') {
      this.router.navigate(['/login'])
    }
    this.findAllTemas()
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp:Tema[])=>{
      this.listaTemas=resp
    })

  }


  cadastrar() {
    this.temaService.postTema(this.tema).subscribe((resp:Tema)=>{
      this.tema=resp
      if(this.tema.categoriaTema == null){
        Swal.fire({
          icon: 'error',
          title: 'ops...',
          text: 'Digite um tema válido.'

        })

      }else{
        Swal.fire({
          icon: 'success',
          title: 'Show...',
          text: 'Tema cadastrado com sucesso!'

        })
        this.findAllTemas()
        this.tema= new Tema()
      }
    },erro =>{
      if(erro.status == 500){
        Swal.fire({
          icon: 'error',
          title: 'Ops...',
          text: 'Não é possível cadastrar um tema vazio!'

        })


      }
  })
}

}
