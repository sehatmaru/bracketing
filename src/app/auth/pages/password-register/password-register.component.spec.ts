import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRegisterComponent } from './password-register.component';

describe('PasswordRegisterComponent', () => {
  let component: PasswordRegisterComponent;
  let fixture: ComponentFixture<PasswordRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordRegisterComponent]
    });
    fixture = TestBed.createComponent(PasswordRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
