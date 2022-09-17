import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import {Pais} from 'src/app/Pais';
@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  paises : Pais[] = [];
  constructor(private paisesService:PaisesService) { 
    this.getPaises(); 
  }

  ngOnInit(): void {
  }

  getPaises():void{
    this.paisesService.getAll().subscribe((paises)=> this.paises = paises)
  }
}
