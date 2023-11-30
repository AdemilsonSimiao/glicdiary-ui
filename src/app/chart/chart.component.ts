import { Component, AfterViewInit  } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit  {
  chart: any;

  ngAfterViewInit() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Exemplo de Gráfico',
            data: [10, 20, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x:{
            beginAtZero:true
          },
          y: {
            beginAtZero:true
          }
        }
      }
    });
  }
}
