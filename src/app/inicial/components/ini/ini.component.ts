import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ini',
  templateUrl: './ini.component.html',
  styleUrls: ['./ini.component.css']
})
export class IniComponent {
  constructor(private router: Router){

  }
  navegar(){
    this.router.navigate(['./clicodv']);

  }
}

