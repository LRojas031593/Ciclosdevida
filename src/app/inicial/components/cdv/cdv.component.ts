import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cdv',
  templateUrl: './cdv.component.html',
  styleUrls: ['./cdv.component.css']
})
export class CdvComponent implements OnInit, OnDestroy{
    cambios: string;
    constructor(){
      this.cambios='';
      console.log('Constructor')
    }
    ngOnInit(): void {
      console.log('OnInit')
        
    }

    ngOnDestroy(): void {
      console.log('ngOnDestroy')
    }

  
}
