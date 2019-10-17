import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [    
  {path:'', redirectTo:'/Login',pathMatch:'full'},    
   {path:'Product', component:ProductComponent},    
   {path:'Login', component:LoginComponent}    
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
