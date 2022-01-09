import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { LoginActions } from 'src/app/infrastructure/enums/login-actions-enum';
import { LoginDialogData } from 'src/app/infrastructure/interfaces/login-dialog-data-interface';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.less']
})
export class LoginDialogComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  loginForm: FormGroup;
  createUser: boolean;
  matcher = new MyErrorStateMatcher();

  constructor(  public dialogRef: MatDialogRef<LoginDialogComponent>, 
                @Inject(MAT_DIALOG_DATA) public data: LoginDialogData ) {
                  this.email = new FormControl('', [Validators.required, Validators.email]);
                  this.password = new FormControl('', {
                    validators: [Validators.minLength(8), 
                      Validators.required],updateOn: 'change'
                    });
                  this.confirmPassword = new FormControl('',[]);
                  this.loginForm = new FormGroup({
                    password:this.password,
                    confirmpassword:this.confirmPassword},{
                       validators:[this.checkPasswords],
                       updateOn: 'change'
                      });
                  this.createUser = false; 
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('minlength') ? 'Password must be 8 characters length' : '';
  }

  onCancel(): void {
    this.data.action = LoginActions.Cancel;
    this.dialogRef.close(this.data);
  }

  onClick(): void {
    this.data.email = this.email.value;
    this.data.password = this.loginForm.controls['password'].value;
    this.data.createUser = this.createUser;
    this.data.action = LoginActions.Email;
    this.dialogRef.close(this.data);
  }

  toggleCreateUser(): void {
    this.createUser = !this.createUser;
  }

  checkPasswords(group: AbstractControl) {
    let formGroup = group as FormGroup;
    let pass = formGroup.controls['password'].value
    let confirmPass = formGroup.controls['confirmpassword'].value;

    return pass === confirmPass ? null : { notSame: true }
  }

}
