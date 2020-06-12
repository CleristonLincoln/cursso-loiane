import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";


interface Cor {
  nome: string;
  codigo: string;
}



@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  cores: SelectItem[]

  selecioneCor: Cor;

  constructor() {
    this.cores = [
      {label:'Selecione a cor', value:null},
      {label:'Verde', value:{id:1, name: 'verde', code: 'vd'}},
      {label:'Amarelo', value:{id:2, name: 'amarelo', code: 'am'}},
      ]
  }

  ngOnInit(): void {
  }

  clicou(){
    console.log('Clicou no botao')
  }

}
