import { Component } from '@angular/core';
import { ButtonSendDataUserComponent } from '../../../shared/button-send-data-user/button-send-data-user.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [ButtonSendDataUserComponent, ReactiveFormsModule],
  providers: [UserService, Router],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  inputsForm: FormGroup;
  base64Image: string = '';
  imgName: string =  '';

  constructor(private service: UserService, private router: Router) {
    this.inputsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',
        [
          Validators.required, 
          Validators.minLength(8), 
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@#]*$')
        ]),
      img: new FormControl(null,
        [
          Validators.required,
        ]),
    });
  }

  submit() {
    if (this.inputsForm.valid) {
      
      this.service.sendDataRegister
      (
        this.inputsForm.value.name,
        this.inputsForm.value.login,
        this.inputsForm.value.password,
        this.imgName,
        this.base64Image,

      ).subscribe({
        next: (response) => {
          const userId = response.id;
          this.router.navigate(['user', userId]);
        }
      });
    }
  }

  onFileSelected(event: any) {
    
    const file: File = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;
    const width = 300;
    const height = 300; 

    if (file && file.size <= maxSize ) {

      this.imgName = file.name;

      const reader = new FileReader();

      reader.readAsDataURL(file)
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width <= width && img.height <= height) {
            // A imagem está dentro dos limites de largura e altura
            this.base64Image = reader.result as string;
            this.base64Image = this.base64Image.split(',')[1];
            console.log(this.base64Image);
          } else {
            // A imagem excede os limites de largura e altura
            console.log('A imagem deve ter no máximo ' + width + 'x' + height + ' pixels.');
          }
        };
        img.src = reader.result as string;
      }
    }
  }
}
