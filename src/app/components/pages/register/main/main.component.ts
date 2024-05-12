import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'main-component-register',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
