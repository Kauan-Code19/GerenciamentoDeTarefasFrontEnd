import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonEditInformationComponent } from './button-edit-information.component';

describe('ButtonEditInformationComponent', () => {
  let component: ButtonEditInformationComponent;
  let fixture: ComponentFixture<ButtonEditInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonEditInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonEditInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
