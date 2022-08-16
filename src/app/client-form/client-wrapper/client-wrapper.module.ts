import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientWrapperComponent } from './client-wrapper.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ClientWrapperComponent
  }
];

@NgModule({
  declarations: [
    ClientWrapperComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    ClientWrapperComponent
  ]
})
export class ClientWrapperModule { }
