import { Component } from '@angular/core';
import { PoMenuItem, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-tela-clientes',
  standalone: false,
  templateUrl: './tela-clientes.component.html',
  styleUrl: './tela-clientes.component.css'
})
export class TelaClientesComponent {
  protected columns: PoTableColumn[] = [
    {
      property: 'id',
      label: 'Codigo'
    },
    {
      property: 'name',
      label: 'Nome'
    }
  ];

  protected items: any[] = [
    { 
      id: "001", 
      name: 'Fulano' 
    }
  ];
}
