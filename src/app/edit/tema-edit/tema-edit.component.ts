import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()
  constructor(
    private temaService: TemaService,
    private router: Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == '')
    {
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Sua sessão expirou faça login novamente!',
      });
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id :number){
    this.temaService.getByIdTema(id).subscribe((resp:Tema) =>{
      this.tema = resp

    })
  }
  atualizar(){
      this.temaService.putTema(this.tema).subscribe((resp:Tema)=>{
        this.tema = resp
        Swal.fire({
          icon: 'success',
          title: 'Show',
          text: 'Tema atualizada com sucesso!',
        });
        this.router.navigate(['/tema'])
      })
  }
}