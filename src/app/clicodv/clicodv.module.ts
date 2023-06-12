import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClicodvRoutingModule } from './clicodv-routing.module';
import { RutaComponent } from './ruta/ruta.component';


@NgModule({
  declarations: [
    RutaComponent
  ],
  imports: [
    CommonModule,
    ClicodvRoutingModule
  ]
})
export class ClicodvModule { }
