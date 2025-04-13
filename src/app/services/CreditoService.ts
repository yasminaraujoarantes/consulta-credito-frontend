import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Credito } from '../model/credito';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private readonly apiUrl = 'http://localhost:8081/api/creditos/';
  
  private readonly creditoListaApiResponseSubject = new BehaviorSubject<Credito[]>([]);
  readonly creditoListaApiResponse$ = this.creditoListaApiResponseSubject.asObservable();

  constructor(private http: HttpClient) {}

  buscarPorNfse(nfseNumero: string): Observable<Credito[]> {
    const endpoint = `${this.apiUrl}${nfseNumero}`;
    return this.http.get<Credito[]>(endpoint);
  }

  buscarPorNumeroCredito(creditoNumero: string): Observable<Credito> {
    const endpoint = `${this.apiUrl}credito/${creditoNumero}`;
    return this.http.get<Credito>(endpoint);
  }

  atualizarResultados(listaCreditos: Credito[]): void {
    this.creditoListaApiResponseSubject.next(listaCreditos ?? []);
  }

  limparResultados(): void {
    this.creditoListaApiResponseSubject.next([]);
  }
}
