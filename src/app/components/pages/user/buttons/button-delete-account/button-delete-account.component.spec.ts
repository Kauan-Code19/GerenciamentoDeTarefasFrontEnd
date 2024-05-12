import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDeleteAccountComponent } from './button-delete-account.component';

describe('ButtonDeleteAccountComponent', () => {
  let component: ButtonDeleteAccountComponent;
  let fixture: ComponentFixture<ButtonDeleteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDeleteAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDeleteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
