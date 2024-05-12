import { Component, OnInit } from '@angular/core';
import { ButtonSendDataUserComponent } from '../../../shared/button-send-data-user/button-send-data-user.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'form-component',
  standalone: true,
  imports: [ButtonSendDataUserComponent, ReactiveFormsModule],
  providers: [UserService, Router],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  inputsForm: FormGroup;
  userId: number | null = null;
  base64Image: string = '';
  imgName: string =  '';
  name: string = '';
  login: string = '';

  constructor
  (
    private service: UserService, 
    private router: Router, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.inputsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('',
      [
        Validators.required, 
        Validators.minLength(8), 
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d@#]*$')
      ]),
    });
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id')
    if (idParam !== null) {
      this.userId = parseInt(idParam, 10);

      this.service.getDataUser(this.userId).subscribe({
        next: (response) => {
          this.name = response.name;
          this.login = response.login;
          this.imgName = response.img;

          this.inputsForm = this.formBuilder.group({
            name: [this.name],
            password: ['']
          })
        }
      })
    }
  }

  submit() {
    if (this.inputsForm.valid && this.userId !== null) {
      
      this.service.sendDataUpdate
      (
        this.userId, 
        this.inputsForm.value.name, 
        this.login, 
        this.inputsForm.value.password,
        this.imgName,
        this.base64Image
      ).subscribe({
        next: () => {
          this.router.navigate(['user', this.userId]);
        }
      })
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
