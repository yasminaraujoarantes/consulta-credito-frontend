import { Component, OnInit } from '@angular/core';
import { CreditoService } from '../../services/CreditoService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-busca',
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
  standalone: true
})
export class BuscaComponent implements OnInit {

  tipoDeBusca: 'nfse' | 'credito' = 'nfse';
  numeroBusca: string = '';

  constructor(private creditService: CreditoService) {}

  ngOnInit(): void {}

  setTipoDeBusca(type: 'nfse' | 'credito'): void {
    this.tipoDeBusca = type;
    this.numeroBusca = '';
    this.creditService.limparResultados();
  }

  getPlaceholder(): string {
    return this.tipoDeBusca === 'nfse' 
      ? 'Digite o número da NFS-e' 
      : 'Digite o número do crédito';
  }

  async buscar(): Promise<void> {
    try {
      const response = await this.fetchSearchResult();
      this.creditService.atualizarResultados(response);
    } catch (error) {
      console.error('Erro na requisição:', error);
      this.creditService.limparResultados();
    }
  }

  private async fetchSearchResult(): Promise<any[]> {
    console.log('Buscando por:', this.numeroBusca);

    if (this.tipoDeBusca === 'nfse') {
      const result = await firstValueFrom(this.creditService.buscarPorNfse(this.numeroBusca));
      return result;
    }

    const result = await firstValueFrom(this.creditService.buscarPorNumeroCredito(this.numeroBusca));
    return [result];
  }
}
