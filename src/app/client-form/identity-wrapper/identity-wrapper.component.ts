import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { identitySuccess } from 'src/app/store/actions/registration.action';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
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

  constructor(private formBuilder: FormBuilder, private router: Router, private store: Store, public dialog: MatDialog) { }

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
    if (form.valid) {
      const identityObj = {
        documentType: form.value.documentType,
        series: form.value.series,
        number: form.value.number,
        issuedBy: form.value.issuedBy,
        dateOfIssue: form.value.dateOfIssue,
        file: form.value.file,
      }

      this.store.dispatch(identitySuccess(identityObj))
      this.dialog.open(ModalComponent, {
        data: {
          routerAddress: 'created-client'}
      });
    }
  }
}
