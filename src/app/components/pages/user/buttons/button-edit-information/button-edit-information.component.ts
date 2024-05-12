import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'button-edit-information-component',
  standalone: true,
  imports: [],
  providers: [Router],
  templateUrl: './button-edit-information.component.html',
  styleUrl: './button-edit-information.component.scss'
})
export class ButtonEditInformationComponent implements OnInit{
  userId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = parseInt(idParam, 10);
    }
  }

  editRoute() {
    if (this.userId !== null) {
      this.router.navigate(['user', this.userId, 'edit'])
    }
  }
}
