import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultadosComponent } from './views/resultados/resultados.component';
import { BuscaComponent } from './views/busca/busca.component';
import { HeaderComponent } from './views/header/header.component';

@Component({
  selector: 'app-root',
  imports: [ResultadosComponent, BuscaComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'consulta-credito';
}
