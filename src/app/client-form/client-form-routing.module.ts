import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientFormComponent } from './client-form.component';

const routes: Routes = [
  {
    path: '',
    component: ClientFormComponent,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./client-wrapper/client-wrapper.module').then(m => m.ClientWrapperModule),
      },
      {
        path: 'address',
        loadChildren: () => import('./address-wrapper/address-wrapper.module').then(m => m.AddressWrapperModule),
      },
      {
        path: 'identity',
        loadChildren: () => import('./identity-wrapper/identity-wrapper.module').then(m => m.IdentityWrapperModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientFormRoutingModule { }
