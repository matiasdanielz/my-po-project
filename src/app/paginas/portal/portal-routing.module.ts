import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TelaClientesComponent } from './tela-clientes/tela-clientes.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: 'clientes',
        component: TelaClientesComponent,
        pathMatch: 'prefix'
      },
      {
        path: 'produtos',
        component: TelaProdutosComponent,
        pathMatch: 'prefix'
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortalRoutingModule { }
