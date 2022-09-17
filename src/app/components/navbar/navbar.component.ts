import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  regiao:string=""
  constructor() { }

  ngOnInit(): void {
  }

  pesquisa(regiao:string):void{
    this.regiao = regiao
    console.log(regiao)
  }
}
