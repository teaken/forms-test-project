import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addressSuccess, clientInfoSuccess } from 'src/app/store/actions/registration.action';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
export class CustomValidators {

  static isNumbers(control: AbstractControl) {

    if (!(control.value)) {
      return null;
    }

    return String(control.value)
      .match(/^[0-9.]+$/) ? null : {'isNumbers': true};
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
  numberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(private formBuilder: FormBuilder,private router: Router,private store: Store) { }

  ngOnInit(): void {

    this.clientForm = this.formBuilder.group(
      {
        lastName: [null, [Validators.required]],
        name: [null, [Validators.required]],
        middleName: [null],
        dateOfBirth: [null,[Validators.required]],
        phoneNumber: [null, [Validators.required,  CustomValidators.isNumbers, Validators.minLength(11), Validators.maxLength(11)]],
        gender: [null],
        clientGroup: [null,[Validators.required]],
        coordinator: [null],
        smsSend: [null]
      }
    );
  }

  onFormSubmit(form: FormGroup){
    if(form.valid){
      const infoObj = {
        lastName: form.value.lastName,
        name: form.value.name,
        middleName: form.value.middleName,
        dateOfBirth: form.value.dateOfBirth,
        phoneNumber: form.value.phoneNumber,
        gender: form.value.gender,
        clientGroup: form.value.clientGroup,
        coordinator: form.value.coordinator,
        smsSend: form.value.smsSend,
      }
  
      this.store.dispatch(clientInfoSuccess(infoObj))
      this.router.navigate(['client-form/address'])
    }
  }
}
