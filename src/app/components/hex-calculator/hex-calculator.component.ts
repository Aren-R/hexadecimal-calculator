import { Component } from '@angular/core';
import { HexCalculatorService } from '../../services/hex-calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hex-calculator',
  templateUrl: './hex-calculator.component.html',
  styleUrls: ['./hex-calculator.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class HexCalculatorComponent {
  display: string = '';
  firstOperand: string = '';
  secondOperand: string = '';
  operator: string = '';
  result: string = '';
  error: string = '';
  waitingForSecondOperand: boolean = false;

  constructor(private calculatorService: HexCalculatorService) {}

  onDigitPress(digit: string) {
    if (this.error) this.clear();
    
    if (!this.operator) {
      if (this.firstOperand.length < 2) {
        this.firstOperand += digit;
        this.display = this.firstOperand;
      }
    } else {
      if (this.secondOperand.length < 2) {
        this.secondOperand += digit;
        this.display = this.firstOperand + ' ' + this.operator + ' ' + this.secondOperand;
        this.waitingForSecondOperand = false;
      }
    }
  }

  onOperatorPress(op: string) {
    if (this.error) this.clear();
    
    if (!this.firstOperand) return;
    
    if (this.secondOperand) {
      this.onEqualPress();
    }
    
    this.operator = op;
    this.waitingForSecondOperand = true;
    this.display = this.firstOperand + ' ' + this.operator;
  }

  onEqualPress() {
    if (this.error || !this.operator || !this.secondOperand) return;
    
    try {
      let res: string = '';
      switch (this.operator) {
        case '+':
          res = this.calculatorService.add(this.firstOperand, this.secondOperand);
          break;
        case '-':
          res = this.calculatorService.subtract(this.firstOperand, this.secondOperand);
          break;
        case '*':
          res = this.calculatorService.multiply(this.firstOperand, this.secondOperand);
          break;
        case '/':
          res = this.calculatorService.divide(this.firstOperand, this.secondOperand);
          break;
        default:
          return;
      }
      
      this.result = res;
      this.display = res;
      this.firstOperand = res;
      this.secondOperand = '';
      this.operator = '';
      this.error = '';
      this.waitingForSecondOperand = false;
    } catch (err: any) {
      this.error = err.message;
      this.display = 'Error';
    }
  }

  clear() {
    this.display = '';
    this.firstOperand = '';
    this.secondOperand = '';
    this.operator = '';
    this.result = '';
    this.error = '';
    this.waitingForSecondOperand = false;
  }
}
