import { Component } from '@angular/core';
import { HexCalculatorService } from '../../services/hex-calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-hex-calculator',
  templateUrl: './hex-calculator.component.html',
  styleUrls: ['./hex-calculator.component.scss'],
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, CardModule],
})
export class HexCalculatorComponent {
  display: string = '';
  firstOperand: string = '';
  secondOperand: string = '';
  operator: string = '';
  result: string = '';
  error: string = '';

  constructor(private calculatorService: HexCalculatorService) {}

  onDigitPress(digit: string) {
    if (this.result) this.clear(); // start fresh if user taps after a result
    if (!this.operator) {
      if (this.firstOperand.length < 2) {
        this.firstOperand += digit;
        this.display = this.firstOperand;
      }
    } else {
      if (this.secondOperand.length < 2) {
        this.secondOperand += digit;
        this.display = this.firstOperand + ' ' + this.operator + ' ' + this.secondOperand;
      }
    }
  }

  onOperatorPress(op: string) {
    if (!this.firstOperand) return;
    if (this.secondOperand) this.onEqualPress(); // allow chaining
    this.operator = op;
    this.display = this.firstOperand + ' ' + this.operator;
  }

  onEqualPress() {
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
  }
}
