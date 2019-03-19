import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'dynamic', component: DynamicComponent},
  { path: 'products', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
