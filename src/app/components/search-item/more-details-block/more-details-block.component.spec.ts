import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsBlockComponent } from './more-details-block.component';

describe('MoreDetailsBlockComponent', () => {
  let component: MoreDetailsBlockComponent;
  let fixture: ComponentFixture<MoreDetailsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDetailsBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
