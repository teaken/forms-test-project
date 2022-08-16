import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'client-form/client', pathMatch: 'full' },
  {
    path: 'client-form',
    loadChildren: () => import('./client-form/client-form.module').then(m => m.ClientFormModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
