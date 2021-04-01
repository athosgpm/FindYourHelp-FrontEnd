import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [

  {path:"", redirectTo:"homepage", pathMatch: "full"},

   {path:"login", component: LoginComponent},
   {path:"cadastrar", component:CadastrarComponent},
   {path: "menu", component:MenuComponent},
   {path: "rodape", component:RodapeComponent},
   {path: "homepage", component:HomePageComponent},
   {path:"userpage", component:UserPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
