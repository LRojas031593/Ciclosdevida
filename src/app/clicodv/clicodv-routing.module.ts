import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaComponent } from './ruta/ruta.component';

const routes: Routes = [
  {
    path:'',
    component:RutaComponent

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClicodvRoutingModule { }
