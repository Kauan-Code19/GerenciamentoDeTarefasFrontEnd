import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'button-list-tasks-component',
  standalone: true,
  imports: [],
  templateUrl: './button-list-tasks.component.html',
  styleUrl: './button-list-tasks.component.scss'
})
export class ButtonListTasksComponent {
  userId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.userId = parseInt(idParam, 10);
    }
  }

  taskRoute() {
    if (this.userId !== null) {
      this.router.navigate(['user', this.userId, 'tasks'])
    }
  }
}
