import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pre-test';

  option: string;
  number: number;
  isPrimeOrFibo: boolean;

  constructor(private _dataService: DataService) {
    this.isPrimeOrFibo = true;
  }

  onNumberChange = ($event: number): void => {
    this.number = $event;
    this.onSelectOption(this.option);
  };

  onSelectOption = ($event: string): void => {
    switch ($event) {
      case 'prime':
        this.isPrimeOrFibo = true;

        for (let i = 2; i < this.number; i++) {
          if (this.number % i == 0) {
            this.isPrimeOrFibo = false;
            this._dataService.booleanChange(this.isPrimeOrFibo);
            break;
          }
        }
        this._dataService.booleanChange(this.isPrimeOrFibo);
        break;
      case 'fibo':
        this._dataService.booleanChange(this._checkFibo(this.number));
        break;
    }
  };

  private _checkFibo = (number: number, count: number = 1, last: number = 0): boolean => {
    if (count < number) {
      return this._checkFibo(number, count + last, count);
    }
    if (count === number) {
      return true;
    }
    return false;
  };
}
