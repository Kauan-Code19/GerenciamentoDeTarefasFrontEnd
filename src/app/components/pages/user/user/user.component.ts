import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NavigationBarComponent, MainComponent, RouterModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
