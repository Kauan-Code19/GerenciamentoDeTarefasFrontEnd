import { Component, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user-service.service';
import { Router } from '@angular/router';
import { ButtonSendDataUserComponent } from '../../../shared/button-send-data-user/button-send-data-user.component';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [ButtonSendDataUserComponent, ReactiveFormsModule,],
  providers: [UserService, Router],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  inputsForm: FormGroup;

  constructor(private service: UserService, private router: Router) {
    this.inputsForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
       [Validators.required, 
        Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@]*$')]),
    });
  }

  submit() {
    if (this.inputsForm.valid) {
      
      this.service.sendDataLogin(this.inputsForm.value.login, this.inputsForm.value.password).subscribe({
        next: (response) => {
          const userId = response.id;

          this.router.navigate(['user', userId]);
        }
      })
    }
  }
}
