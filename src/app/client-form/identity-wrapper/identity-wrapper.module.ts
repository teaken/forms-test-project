import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityWrapperComponent } from './identity-wrapper.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: IdentityWrapperComponent
  }
];

@NgModule({
  declarations: [
    IdentityWrapperComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    IdentityWrapperComponent
  ]
})
export class IdentityWrapperModule { }
