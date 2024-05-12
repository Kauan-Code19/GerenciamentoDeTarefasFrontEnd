import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'main-component-login',
  standalone: true,
  imports: [FormComponent, RouterModule],
  providers: [Router],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  constructor() {}
}
