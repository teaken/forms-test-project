import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressWrapperComponent } from './address-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';

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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    AddressWrapperComponent
  ]
})
export class AddressWrapperModule { }
