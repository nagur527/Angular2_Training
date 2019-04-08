import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '../app.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss'],
})
export class DataGridComponent implements OnInit {
  @Input() tableData: User[];
  constructor() { }

  ngOnInit() {

  }

}
