import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {SliderComponent} from './slider/slider.component';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent},
  { path: '', component: SliderComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
