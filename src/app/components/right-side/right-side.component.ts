import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss'],
})
export class RightSideComponent implements OnInit {

  isPrimeOrFibo: boolean

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.currentBoolean.subscribe((res) => {
      this.isPrimeOrFibo = res
    });
  }
}
