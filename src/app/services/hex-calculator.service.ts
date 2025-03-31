import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HexCalculatorService {
    validateInput(input: string) {
        // if (input.length > 2) {
        //   throw new Error("Input exceeds 2 digits");  // Ensure correct error message
        // }
        // if (!/^[0-9A-F]+$/i.test(input)) {
        //   throw new Error("Invalid hexadecimal input"); // This check comes after length check
        // }
      }
      
  
    add(hex1: string, hex2: string): string {
    //   this.validateInput(hex1);
    //   this.validateInput(hex2);
    //   let result = parseInt(hex1, 16) + parseInt(hex2, 16);
    //   return this.formatResult(result);
        return "fail"
    }
  
    subtract(hex1: string, hex2: string): string {
    //   this.validateInput(hex1);
    //   this.validateInput(hex2);
    //   let result = parseInt(hex1, 16) - parseInt(hex2, 16);
    //   if (result < 0) throw new Error('Negative result not allowed');
    //   return this.formatResult(result);
      return "fail"
    }
  
    multiply(hex1: string, hex2: string): string {
    //   this.validateInput(hex1);
    //   this.validateInput(hex2);
    //   let result = parseInt(hex1, 16) * parseInt(hex2, 16);
    //   return this.formatResult(result);
      return "fail"
    }
  
    divide(hex1: string, hex2: string): string {
    //   this.validateInput(hex1);
    //   this.validateInput(hex2);
    //   let result = parseInt(hex1, 16) / parseInt(hex2, 16);
    //   if (!Number.isInteger(result)) throw new Error('Decimal results not allowed');
    //   return this.formatResult(result);
      return "fail"
    }
  
    private formatResult(result: number): string {
    //   let hexResult = result.toString(16).toUpperCase();
    //   if (hexResult.length > 4) throw new Error('Output exceeds 4 digits');
    //   return hexResult;
      return "fail"
    }
}
