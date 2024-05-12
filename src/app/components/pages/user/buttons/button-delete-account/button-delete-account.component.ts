import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'button-delete-account-component',
  standalone: true,
  imports: [],
  providers: [UserService, Router],
  templateUrl: './button-delete-account.component.html',
  styleUrl: './button-delete-account.component.scss'
})
export class ButtonDeleteAccountComponent implements OnInit {
  userId: number | null = null;

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = parseInt(idParam, 10);
    }
  }

  deleteUser() {
    if (this.userId !== null) {
      this.service.deleteUser(this.userId).subscribe({
        next: () => {
          this.router.navigateByUrl('/login')
        }
      });
    }
  }
}
