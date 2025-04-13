import { Component, OnInit } from '@angular/core';
import { Credito } from '../../model/credito';
import { CreditoService } from '../../services/CreditoService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.scss'
})
export class ResultadosComponent implements OnInit {
  creditosLista: Credito[] = [];

  constructor(private creditService: CreditoService) {}

  ngOnInit(): void {
    this.creditService.creditoListaApiResponse$.subscribe(data => {
      this.creditosLista = data;
    });
  }
}
