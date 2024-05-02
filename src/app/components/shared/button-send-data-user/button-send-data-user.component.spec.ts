import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSendDataUserComponent } from './button-send-data-user.component';

describe('ButtonSendDataUserComponent', () => {
  let component: ButtonSendDataUserComponent;
  let fixture: ComponentFixture<ButtonSendDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSendDataUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSendDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
