import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  pesagens$ = this.data.pesagens$;
  options: any;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.pesagens$.subscribe(pesagens => {
      const xAxisData: string[] = [];
      const data1: number[] = [];
  
      pesagens.forEach(pesagem => {
        xAxisData.push(pesagem.date);
        data1.push(pesagem.weight);
      })
  
      this.options = {
        legend: {
          data: ['peso'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData,
          silent: false,
          splitLine: {
            show: false,
          },
        },
        yAxis: {onZero: false},
        series: [
          {
            name: 'line',
            type: 'line',
            data: data1,
            animationDelay: (idx: number) => idx * 10,
          },
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: (idx: number) => idx * 5,
      };
    })
    
  }

}
