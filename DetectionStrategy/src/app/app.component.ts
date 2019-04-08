import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
export interface User {
  Name: string;
  City: string;
  Country: string;
}
const USER_DATA: User[] = [
  { Name: 'Alfreds Futterkiste', City: 'Berlin', Country: 'Germany' },
  { Name: 'Ana Trujillo Emparedados y helados', City: 'México D.F.', Country: 'Mexico' },
  { Name: 'Antonio Moreno Taquería', City: 'México D.F.', Country: 'Mexico' },
  { Name: 'Around the Horn', City: 'London', Country: 'UK' },
  { Name: 'B\'s Beverages', City: 'London', Country: 'UK' },
  { Name: 'Berglunds snabbköp', City: 'Luleå', Country: 'Sweden' },
  { Name: 'Blauer See Delikatessen', City: 'Mannheim', Country: 'Germany' },
  { Name: 'Blondel père et fils', City: 'Strasbourg', Country: 'France' }
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private cdRef: ChangeDetectorRef) { }
  title = 'detection Strategy';
  tableData: User[] = USER_DATA;
  moreData: User[] = [{ Name: 'Bólido Comidas preparadas', City: 'Madrid', Country: 'Spain' },
  { Name: 'Bon app', City: 'Marseille', Country: 'France' },
  { Name: 'Bottom-Dollar Marketse', City: 'Tsawassen', Country: 'Canada' },
  { Name: 'Cactus Comidas para llevar', City: 'Buenos Aires', Country: 'Argentina' },
  { Name: 'Centro comercial Moctezuma', City: 'México D.F.', Country: 'Mexico' },
  { Name: 'Chop-suey Chinese', City: 'Bern', Country: 'Switzerland' },
  { Name: 'Comércio Mineiro', City: 'São Paulo', Country: 'Brazil' }];

  loadMore() {
    setTimeout(() => {
      if (this.moreData.length) {
        this.tableData.push(this.moreData.shift());
        // this.cdRef.detectChanges();
        this.cdRef.markForCheck();
        this.loadMore();
      }
    }, 2000);
  }
  ngOnInit() {
  }
}
