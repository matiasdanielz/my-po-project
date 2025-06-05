import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-portal',
  standalone: false,
  
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {
  protected menuItems: PoMenuItem[] = [
    {
      label: 'Clientes',
      icon: 'an an-user',
      link: 'clientes'
    },
    {
      label: 'Produtos',
      icon: 'an an-pallet-full',
      link: 'produtos'
    }
  ];
}
