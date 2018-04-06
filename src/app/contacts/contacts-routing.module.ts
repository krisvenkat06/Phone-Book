import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactshomeComponent } from './contactshome/contactshome.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: 'index',
    component: ContactshomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
