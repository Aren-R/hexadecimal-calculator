import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HexCalculatorService {
    validateInput(input: string) {
        if (input.length > 2) {
          throw new Error("Input exceeds 2 digits");
        }
        if (!/^[0-9A-F]+$/i.test(input)) {
          throw new Error("Invalid hexadecimal input");
        }
      }
      
  
    add(hex1: string, hex2: string): string {
      this.validateInput(hex1);
      this.validateInput(hex2);
      let result = parseInt(hex1, 16) + parseInt(hex2, 16);
      return this.formatResult(result);
    }
  
    subtract(hex1: string, hex2: string): string {
      this.validateInput(hex1);
      this.validateInput(hex2);
      let result = parseInt(hex1, 16) - parseInt(hex2, 16);
      if (result < 0) throw new Error('Negative result not allowed');
      return this.formatResult(result);
    }
  
    multiply(hex1: string, hex2: string): string {
      this.validateInput(hex1);
      this.validateInput(hex2);
      let result = parseInt(hex1, 16) * parseInt(hex2, 16);
      return this.formatResult(result);
    }
  
    divide(hex1: string, hex2: string): string {
      this.validateInput(hex1);
      this.validateInput(hex2);
      let result = parseInt(hex1, 16) / parseInt(hex2, 16);
      if (!Number.isInteger(result)) throw new Error('Decimal results not allowed');
      return this.formatResult(result);
    }
  
    private formatResult(result: number): string {
      let hexResult = result.toString(16).toUpperCase();
      if (hexResult.length > 4) throw new Error('Output exceeds 4 digits');
      return hexResult;
    }
}
