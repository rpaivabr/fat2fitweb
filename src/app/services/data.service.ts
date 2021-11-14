import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  pesagensSubject = new BehaviorSubject<any[]>(this.pesagemInicial());
  pesagens$ = this.pesagensSubject.asObservable();

  adicionarPesagem(pesagem: any): void {
    this.pesagensSubject.next([...this.pesagemInicial(), pesagem]);
  }

  pesagemInicial(): any[] {
    return [
      { date: '12/11/2021', weight: 118 },
      { date: '13/11/2021', weight: 117 },
      { date: '14/11/2021', weight: 116 },
    ]
  }
  
}
