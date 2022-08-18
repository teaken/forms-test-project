import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationGuardGuard } from '../registration-guard.guard';
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
        canActivate: [RegistrationGuardGuard]
      },
      {
        path: 'identity',
        loadChildren: () => import('./identity-wrapper/identity-wrapper.module').then(m => m.IdentityWrapperModule),
        canActivate: [RegistrationGuardGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [RegistrationGuardGuard]
})
export class ClientFormRoutingModule { }
