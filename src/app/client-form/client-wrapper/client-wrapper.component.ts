import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-client-wrapper',
  templateUrl: './client-wrapper.component.html',
})


export class ClientWrapperComponent implements OnInit {
  clientForm!: FormGroup;
  clientGroupList: string[] = ['VIP Clients', 'Loyal Clients', 'New Clients'];
  
  matcher = new MyErrorStateMatcher();
  
  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.clientForm = this.formBuilder.group(
      {
        lastName: [null, [Validators.required]],
        name: [null, [Validators.required]],
        middleName: [null],
        dateOfBirth: [null,[Validators.required]],
        phoneNumber: [null, [Validators.required]],
        gender: [null],
        clientGroup: [null,[Validators.required]],
        coordinator: [null],
        smsSend: [null]
      }
    );
  }

  onFormSubmit(form: FormGroup){
    console.log(form.value)
    this.router.navigate(['client-form/address'])
  }
}
