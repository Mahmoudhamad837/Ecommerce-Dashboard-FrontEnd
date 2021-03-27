import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTextInputComponent } from './generic-text-input.component';

describe('GenericTextInputComponent', () => {
  let component: GenericTextInputComponent;
  let fixture: ComponentFixture<GenericTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericTextInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
