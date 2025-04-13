import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true
})
export class HeaderComponent implements OnInit{

  userName: string = 'Yasmin Arantes';

  constructor() {}

  ngOnInit(): void {}

}
