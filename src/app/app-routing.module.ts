import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TemaComponent } from './tema/tema.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';

const routes: Routes = [

  {path:"", redirectTo:"homepage", pathMatch: "full"},

   {path:"login", component: LoginComponent},
   {path:"cadastrar", component:CadastrarComponent},
   {path: "menu", component:MenuComponent},
   {path: "rodape", component:RodapeComponent},
   {path: "homepage", component:HomePageComponent},
   {path:"userpage", component:UserPageComponent},
   {path: "tema", component:TemaComponent},
   {path: "tema-delete/:id", component:TemaDeleteComponent},
   {path: "tema-edit/:id", component:TemaEditComponent},
   {path:'postagem-edit/:id',component:PostagemEditComponent},
  {path:'postagem-delete/:id', component:PostagemDeleteComponent},
  {path:'user-edit/:id',component:UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
