import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente/cliente';
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  public getClientesFields(){

  }

  public getClientesColumns(): PoTableColumn[]{
    return [
      {
        property: 'id',
        label: 'Codigo'
      },
      {
        property: 'name',
        label: 'Nome'
      }
    ]
  }

  public getClientesItems(): Cliente[]{
    return [
      { 
        id: "001", 
        name: 'Fulano',
      }
    ]
  }
}
