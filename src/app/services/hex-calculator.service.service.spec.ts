import { TestBed } from '@angular/core/testing';

import { HexCalculatorServiceService } from './hex-calculator.service.service';

describe('HexCalculatorServiceService', () => {
  let service: HexCalculatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexCalculatorServiceService);
  });

  it ('should validate input correctly', () => {
    expect(() => service.validateInput('1')).not.toThrowError();
    expect(() => service.validateInput('G')).toThrowError();
  });

  it('should add two valid hexadecimal numbers', () => {
    expect(service.add('A', '5')).toEqual('F');
  });

  it('should not allow input greater than 2 digits', () => {
    expect(() => service.add('100', 'A')).toThrowError('Input exceeds 2 digits');
  });

  it('should return a maximum of 4 digits in output', () => {
    expect(service.multiply('FF', 'F')).toEqual('EF1'); 
  });

  it('should not return negative values', () => {
    expect(() => service.subtract('5', 'A')).toThrowError('Negative result not allowed');
  });

  it('should not return decimal values', () => {
    expect(() => service.divide('A', '3')).toThrowError('Decimal results not allowed');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
