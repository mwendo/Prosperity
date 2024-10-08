import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsperityButtonComponent } from './prosperity-button.component';

describe('ProsperityButtonComponent', () => {
  let component: ProsperityButtonComponent;
  let fixture: ComponentFixture<ProsperityButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProsperityButtonComponent]
    });
    fixture = TestBed.createComponent(ProsperityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
