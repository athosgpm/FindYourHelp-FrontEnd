import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  baseUrl = environment.server + environment.port
  constructor(
    private http:HttpClient
  ) { }
    token = {headers : new HttpHeaders().set('Authorization', environment.token)}

    getAllPostagens():Observable<Postagem[]>
    {
      return this.http.get<Postagem[]>(`${this.baseUrl}/postagens/`, this.token)
    }
    getByIdPostagem(id:number):Observable<Postagem>
    {
      return this.http.get<Postagem>(`${this.baseUrl}/postagens/${id}`, this.token)
    }
    getByTituloPostagem(tituloPostagem: string): Observable<Postagem[]>{
      return this.http.get<Postagem[]>(`${this.baseUrl}/postagens/tituloPostagem/${tituloPostagem}`, this.token)

    }
    getByTipoPostagem(tipoPostagem: string): Observable<Postagem[]>{
      return this.http.get<Postagem[]>(`${this.baseUrl}/postagens/tipo/postagem/portipo/${tipoPostagem}`, this.token)

    }



    postPostagem(postagem:Postagem){
      return this.http.post<Postagem>(`${this.baseUrl}/postagens/`,postagem, this.token)
    }

    putPostagem(postagem:Postagem):Observable<Postagem>{
      return this.http.put<Postagem>(`${this.baseUrl}/postagens/`,postagem, this.token)
    }

    deletePostagem(id:number){
      return this.http.delete(`${this.baseUrl}/postagens/${id}`,this.token)
    }
}
