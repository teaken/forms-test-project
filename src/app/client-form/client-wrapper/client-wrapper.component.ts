import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-wrapper',
  templateUrl: './client-wrapper.component.html',
  styleUrls: ['./client-wrapper.component.scss']
})
export class ClientWrapperComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.clientForm = this.formBuilder.group(
      {
        lastName: [null, [Validators.required]],
        name: [null, [Validators.required]],
        middleName: [null, [Validators.required]]
      }
    );
  }

  onFormSubmit(form: FormGroup){
    console.log(form.value)
  }
}
