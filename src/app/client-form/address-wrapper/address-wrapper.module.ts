import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressWrapperComponent } from './address-wrapper.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AddressWrapperComponent
  }
];


@NgModule({
  declarations: [
    AddressWrapperComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    CommonModule
  ],
  exports:[
    AddressWrapperComponent
  ]
})
export class AddressWrapperModule { }
