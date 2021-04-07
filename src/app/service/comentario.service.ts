import { Observable } from 'rxjs';
import { Comentario } from './../model/Comentario';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  baseURL = environment.server + environment.port

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.baseURL}/comentarios`, this.token)
  }

  getByIdComentario(id: number): Observable<Comentario>{
    return this.http.get<Comentario>(`${this.baseURL}/comentarios/${id}`, this.token)
  }

  postComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.baseURL}/comentarios`, comentario, this.token)
  }

  putComentario(comentario: Comentario): Observable<Comentario>{
    return this.http.put<Comentario>(`${this.baseURL}/comentarios`, comentario, this.token)
  }

  deleteComentario(id: number){
    return this.http.delete(`${this.baseURL}/comentarios/${id}`, this.token)
  }
}