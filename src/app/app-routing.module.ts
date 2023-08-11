import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './page/menu/menu.component';
import { RegisterComponent } from './page/menu/register/register.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
