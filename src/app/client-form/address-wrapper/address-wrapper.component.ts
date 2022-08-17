import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addressSuccess } from 'src/app/store/actions/registration.action';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-address-wrapper',
  templateUrl: './address-wrapper.component.html',
  styleUrls: ['./address-wrapper.component.scss']
})
export class AddressWrapperComponent implements OnInit {
  addressForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.addressForm = this.formBuilder.group(
      {
        index: [null],
        country: [null, [Validators.required]],
        area: [null],
        city: [null,[Validators.required]],
        street: [null],
        house: [null],
  
      }
    );
  }

  onFormSubmit(form: FormGroup){
    if(form.valid){
      const addressObj = {
        index: form.value.index,
        country: form.value.country,
        area: form.value.area,
        city: form.value.city,
        street: form.value.street,
        house: form.value.house,
      }
  
      this.store.dispatch(addressSuccess(addressObj))
      this.router.navigate(['client-form/identity'])
    }
 
  }
}
