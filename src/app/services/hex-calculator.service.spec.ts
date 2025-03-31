import { TestBed } from '@angular/core/testing';
import { HexCalculatorService } from './hex-calculator.service';

describe('HexCalculatorService', () => {
  let service: HexCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HexCalculatorService);
  });

  // ✅ Inputting Values
  describe('Input Validation', () => {
    it('should accept valid hexadecimal inputs', () => {
      expect(() => service.validateInput('A')).not.toThrowError();
      expect(() => service.validateInput('1F')).not.toThrowError();
    });

    it('should reject invalid characters', () => {
      expect(() => service.validateInput('G')).toThrowError('Invalid hexadecimal input');
      expect(() => service.validateInput('1Z')).toThrowError('Invalid hexadecimal input');
    });

    it('should reject input greater than 2 digits', () => {
      expect(() => service.validateInput('100')).toThrowError('Input exceeds 2 digits');
    });
  });

  // ✅ Arithmetic Operations
  describe('Hexadecimal Arithmetic', () => {
    it('should add two valid hexadecimal numbers', () => {
      expect(service.add('A', '5')).toEqual('F');
      expect(service.add('1F', '1')).toEqual('20');
    });

    it('should subtract two valid hexadecimal numbers without negative results', () => {
      expect(service.subtract('A', '5')).toEqual('5');
      expect(() => service.subtract('5', 'A')).toThrowError('Negative result not allowed');
    });

    it('should multiply two valid hexadecimal numbers', () => {
      expect(service.multiply('F', 'F')).toEqual('E1'); 
      expect(service.multiply('1A', '2')).toEqual('34');
    });

    it('should not allow division that results in decimal values', () => {
      expect(() => service.divide('A', '3')).toThrowError('Decimal results not allowed');
      expect(service.divide('10', '2')).toEqual('8');
    });
  });

  // ✅ Outputting Values
  describe('Output Constraints', () => {
    it('should limit output to a maximum of 4 digits', () => {
      expect(service.multiply('FF', 'FF')).toEqual('FE01'); // (255 * 255 = 65025 -> FE01 in hex)
      expect(() => service.multiply('FF', 'FF0')).toThrowError('Output exceeds 4 digits');
    });

    it('should not return decimal values in the result', () => {
      expect(() => service.divide('A', '3')).toThrowError('Decimal results not allowed');
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
