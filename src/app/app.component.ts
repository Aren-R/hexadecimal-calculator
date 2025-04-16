import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexCalculatorComponent } from './components/hex-calculator/hex-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HexCalculatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hexadecimal-calculator';
}
