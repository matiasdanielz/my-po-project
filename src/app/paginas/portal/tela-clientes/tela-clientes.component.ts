import { Component } from '@angular/core';
import { PoMenuItem, PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ClientesService } from '../../../services/clientes/clientes.service';

@Component({
  selector: 'app-tela-clientes',
  standalone: false,
  templateUrl: './tela-clientes.component.html',
  styleUrl: './tela-clientes.component.css'
})
export class TelaClientesComponent {
  protected tableHeight = window.innerHeight * 0.75;
  protected columns: PoTableColumn[] = [];
  protected items: any[] = [];
  protected pageActions: PoPageAction[] = [
    {
      label: 'Novo',
      icon: 'po-icon-plus'
    }
  ];

  protected tableActions: PoTableAction[] = [
    {
      label: 'Visualizar',
      icon: 'po-icon-eye'
    },
    {
      label: 'Editar',
      icon: 'po-icon-edit'
    },

  ]

  constructor(
    private clientesService: ClientesService
  ){
    this.columns = clientesService.getClientesColumns();
    this.items = clientesService.getClientesItems();
  }
}
