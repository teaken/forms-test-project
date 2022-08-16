import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityWrapperComponent } from './identity-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';


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
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    IdentityWrapperComponent
  ]
})
export class IdentityWrapperModule { }
