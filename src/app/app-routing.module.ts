import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"", redirectTo:"login", pathMatch: "full"},


   {path:"login", component: LoginComponent},
   {path:"cadastrar", component:CadastrarComponent},
   {path: "menu", component:MenuComponent},
   {path: "rodape", component:RodapeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
