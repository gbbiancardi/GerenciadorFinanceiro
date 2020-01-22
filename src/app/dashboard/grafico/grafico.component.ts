import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40], 
      borderColor: 'rgba(103,39,242,0.9)',
      hoverBorderColor: 'rgba(103,39,242,0.7)',
      backgroundColor: 'rgba(103,39,242,0.9)',
      hoverBackgroundColor: 'rgba(103,39,242,0.7)',
      label: 'Receitas', 
    },
    { 
      data: [28, 48, 40, 19, 86, 27, 90], 
      borderColor: 'rgba(62,13,166,0.9)',
      hoverBorderColor: 'rgba(62,13,166,0.7)',
      backgroundColor: 'rgba(62,13,166,0.9)',
      hoverBackgroundColor: 'rgba(62,13,166,0.7)',
      label: 'Despesas', 
    }
  ];

  public lineChartOptions = {
    showLines: true,
    spanGaps: true
  }
  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: ['rgba(103,39,242,0.8)'],
      backgroundColor: ['rgba(103,39,242,0.5)'],
      pointBackgroundColor: 'rgba(103,39,242,0.8)',
      pointHoverBorderColor: 'rgba(103,39,242,0.8)',
      label: 'Receitas' 
    },
    { 
      data: [28, 48, 40, 19, 86, 27, 90], 
      borderColor: ['rgba(62,13,166,0.8)'],
      backgroundColor: ['rgba(62,13,166,0.5)'],
      pointBackgroundColor: 'rgba(62,13,166,0.8)',
      pointHoverBorderColor: 'rgba(62,13,166,0.8)',
      label: 'Despesas' 
    }
  ];

  public pieChartOptions = {
    cutoutPercentage: 0,
    title: {display: true, text: 'Despesas'},
    legend: {position: 'bottom'}
  }
  public pieChartLabels = ['2010', '2011', '2012'];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData = [
    { 
      data: [86, 27, 90],
      backgroundColor: ['rgba(62,13,166,0.8)', 'rgba(62,13,166,0.6)', 'rgba(62,13,166,0.3)'],
    }
  ];

  public polarChartOptions = {
    cutoutPercentage: 0,
    title: {display: true, text: 'Receitas'},
    legend: {position: 'bottom'}
  }
  public polarChartLabels = ['2010', '2011', '2012'];
  public polarChartType = 'polarArea';
  public polarChartLegend = true;
  public polarChartData = [
    { 
      data: [56, 55, 40],
      backgroundColor: ['rgba(62,13,166,0.8)', 'rgba(62,13,166,0.6)', 'rgba(62,13,166,0.3)'],
      borderColor: ['rgba(62,13,166,0.8)', 'rgba(62,13,166,0.6)', 'rgba(62,13,166,0.3)'],
      hoverBackgroundColor: ['rgba(62,13,166,0.8)', 'rgba(62,13,166,0.6)', 'rgba(62,13,166,0.3)'],
      hoverBorderColor: ['rgba(62,13,166,0.8)', 'rgba(62,13,166,0.6)', 'rgba(62,13,166,0.3)']
    }
  ];

  ngOnInit() {
  }

}
