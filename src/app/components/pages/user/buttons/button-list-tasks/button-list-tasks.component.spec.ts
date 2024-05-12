import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonListTasksComponent } from './button-list-tasks.component';

describe('ButtonListTasksComponent', () => {
  let component: ButtonListTasksComponent;
  let fixture: ComponentFixture<ButtonListTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonListTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonListTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
