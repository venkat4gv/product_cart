import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { LoginComponent } from './login/login.component';
import { ProductcartComponent } from './productcart/productcart.component';

const routes: Routes = [
  {path: 'buyPage', component: BuyproductComponent},
  {path: 'product', component: ProductcartComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
