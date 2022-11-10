import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusionMatrixInputComponent } from './confusion-matrix-input.component';

describe('ConfusionMatrixInputComponent', () => {
  let component: ConfusionMatrixInputComponent;
  let fixture: ComponentFixture<ConfusionMatrixInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfusionMatrixInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfusionMatrixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
