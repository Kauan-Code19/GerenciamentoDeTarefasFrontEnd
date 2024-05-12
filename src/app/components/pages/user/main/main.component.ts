import { Component, Input, OnInit } from '@angular/core';
import { ButtonListTasksComponent } from '../buttons/button-list-tasks/button-list-tasks.component';
import { ButtonEditInformationComponent } from '../buttons/button-edit-information/button-edit-information.component';
import { ButtonDeleteAccountComponent } from '../buttons/button-delete-account/button-delete-account.component';
import { UserService } from '../../../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Url } from 'url';
import { NgOptimizedImage } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { blob } from 'stream/consumers';

@Component({
  selector: 'main-component-user',
  standalone: true,
  imports: 
  [
    ButtonListTasksComponent, 
    ButtonEditInformationComponent, 
    ButtonDeleteAccountComponent,
    NgOptimizedImage
  ],
  providers: [UserService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  userId: number | null = null;
  userName: string | null = null;
  userImage: string | null = null;

  constructor(private service: UserService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = parseInt(idParam, 10);
      this.service.getDataUser(this.userId).subscribe({
        next: (response) => {
          this.userName = response.name;

          this.service.getImageUserUrl(response.img).subscribe(
            (path) => {
              this.userImage = `http://localhost:8080/${path.imagePath}`;
            }
          )
        }
      })
    } else {
      // Lida com o caso em que o parâmetro 'id' não está presente na rota
    }
  }
}
