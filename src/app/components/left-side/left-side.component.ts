import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss'],
})
export class LeftSideComponent implements OnInit {
  number: number;

  @Output() onNumberChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onTypeNumber = ($event: string): void => {
    if (!!parseInt($event)) {
      if (Number($event) < 0) {
        this.number = 1;
        return;
      }
      let round: number = Math.round(Number($event));
      this.number = round;
      this.onNumberChange.emit(this.number);
    }
  };
}
