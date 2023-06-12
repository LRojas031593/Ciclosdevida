import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    
    path:'',
    loadChildren:() => import('./inicial/inicial.module').then(m => m.InicialModule)
    
  },
  {
    path: 'clicodv', loadChildren:() => import('./clicodv/clicodv.module').then(m => m.ClicodvModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
