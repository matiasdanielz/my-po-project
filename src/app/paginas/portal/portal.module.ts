import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaClientesComponent } from './tela-clientes/tela-clientes.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal/portal.component';
import { PoMenuModule } from '@po-ui/ng-components';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { PoPageModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    TelaClientesComponent,
    PortalComponent,
    TelaProdutosComponent
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PoMenuModule,
    PoPageModule
  ]
})
export class PortalModule { }
