import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.server



  constructor(
    private http:HttpClient
  ) { }

  entrar(userLogin: UserLogin):Observable <UserLogin>{
    return this.http.post<UserLogin>(`${this.baseURL}/usuarios/logar`,userLogin)
  }

  cadastrar(user: User):Observable <User>{
    return this.http.post<User>(`${this.baseURL}/usuarios/cadastrar`,user)

  }
  atualizar(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseURL}/usuarios`, user,
    {headers: {'Authorization': environment.token}})
  }
  
  findUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseURL}/usuarios/${id}`, { headers: {'Authorization':environment.token}})
  }

  getByIdUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.baseURL}/usuarios/${id}`, { headers: {'Authorization':environment.token}})
  }


  logado(){
    let ok = false
    if(environment.token != ''){
      ok = true
    }
    return ok
    

  }

  Colaborador(){
    let ok :boolean = false
    if(environment.tipoUsuario == 'Empreendedor')
    {
      ok = true
    }
    

    return ok

  }
}
