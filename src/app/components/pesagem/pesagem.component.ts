import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pesagem',
  templateUrl: './pesagem.component.html',
  styleUrls: ['./pesagem.component.scss']
})
export class PesagemComponent {
  pesagens$ = this.data.pesagens$;

  constructor(private data: DataService) {}

  adicionarPesagem(): void {
    this.data.adicionarPesagem({ date: '14/11/2021', weight: 116 });
  }

}
