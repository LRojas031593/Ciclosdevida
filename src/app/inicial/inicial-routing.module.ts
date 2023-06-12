import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniComponent } from './components/ini/ini.component';
import { CdvComponent } from './components/cdv/cdv.component';

const routes: Routes = [
  {
    path:'',
    component:IniComponent

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicialRoutingModule { }
