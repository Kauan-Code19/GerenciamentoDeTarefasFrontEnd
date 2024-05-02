import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    
}
