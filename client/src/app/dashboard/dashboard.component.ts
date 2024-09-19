import { Component } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';
import { StatisticsService } from '../service/statistics/statistics.service';
import { Sales, StatisticsResponse } from '../models/statistics.model';
import { Router } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgxChartsModule, AsyncPipe, LayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  multi!: any[];
  salesData$!: Observable<Sales[]>;

  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Sales';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme: Color = {
    domain: ['#f0a344', '#f04f44 ', '#2c6e91', '#eaeff2'],
    name: 'custom',
    selectable:true,
    group: ScaleType.Time
  }

  constructor(private statisticsService: StatisticsService, private router: Router) {}

  ngOnInit() {
    const data$ = this.statisticsService.getStatistics();
    this.salesData$ = data$.pipe(map((data: StatisticsResponse) =>
    data.statistics.sales.map((item) =>({
      name: item.name,
      value: item.value
    })) ));
  }

  onSelect(event: any) {
    console.log(event);
  }

  getForm() {
    this.router.navigate(['/form'])
  }
}
