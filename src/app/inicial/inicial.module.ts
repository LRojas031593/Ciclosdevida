import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicialRoutingModule } from './inicial-routing.module';
import { IniComponent } from './components/ini/ini.component';
import { CdvComponent } from './components/cdv/cdv.component';


@NgModule({
  declarations: [
    IniComponent,
    CdvComponent
  ],
  imports: [
    CommonModule,
    InicialRoutingModule
  ]
})
export class InicialModule { }
