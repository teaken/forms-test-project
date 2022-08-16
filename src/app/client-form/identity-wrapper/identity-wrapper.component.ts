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
  selector: 'app-identity-wrapper',
  templateUrl: './identity-wrapper.component.html',
})
export class IdentityWrapperComponent implements OnInit {
  identityForm!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.identityForm = this.formBuilder.group(
      {
        documentType: [null, [Validators.required]],
        series: [null],
        number: [null, [Validators.required]],
        issuedBy: [null],
        dateOfIssue: [null, [Validators.required]],
        file: [null],

      }
    );
  }
  onFormSubmit(form: FormGroup) {

  }
}
