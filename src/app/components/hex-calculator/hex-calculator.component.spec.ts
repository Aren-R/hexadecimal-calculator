import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexCalculatorComponent } from './hex-calculator.component';

describe('HexCalculatorComponent', () => {
  let component: HexCalculatorComponent;
  let fixture: ComponentFixture<HexCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
