import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { CreatedClientComponent } from './created-client.component';


const routes: Routes = [
  {
    path: '',
    component: CreatedClientComponent
  }
];

@NgModule({
  declarations: [
    CreatedClientComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [
    CreatedClientComponent
  ]
})
export class CreatedClientModule { }
