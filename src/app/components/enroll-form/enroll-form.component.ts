import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements OnInit {
  registrationForm: FormGroup;
  
  constructor(private fb: FormBuilder,private toastr: ToastrService) {

  }

  ngOnInit() {

    this.registrationForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]]
      }
    )

  }

  onSubmit(value) {
    this.toastr.success('We will to reach you soon','Details Saved');
    this.registrationForm.reset();
  }


}