import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginElementComponent } from './login-element.component';

describe('LoginElementComponent', () => {
  let component: LoginElementComponent;
  let fixture: ComponentFixture<LoginElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
