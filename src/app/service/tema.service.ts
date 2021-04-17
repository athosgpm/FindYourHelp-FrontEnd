import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  baseURL = environment.server
  constructor(
    
    private http: HttpClient
  ) { }

  token={ 
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  getAllTema():Observable<Tema[]>{
    return this.http.get<Tema[]>(`${this.baseURL}/tema`, this.token)
  }
  getByIdTema(id:number):Observable<Tema>{
    return this.http.get<Tema>(`${this.baseURL}/tema/${id}`, this.token)
  }
  getByNomeTema(categoriaTema: string):Observable<Tema[]>{
    return this.http.get<Tema[]>(`${this.baseURL}/tema/categoriaTema/${categoriaTema}`, this.token)

  }
  postTema(tema:Tema):Observable<Tema>{
    return this.http.post<Tema>(`${this.baseURL}/tema`,tema, this.token)
  }
  putTema(tema:Tema):Observable<Tema>{
    return this.http.put<Tema>(`${this.baseURL}/tema`,tema, this.token)
  }
  deleteTema(id:number){
    return this.http.delete(`${this.baseURL}/tema/${id}`,this.token)
  }


}
