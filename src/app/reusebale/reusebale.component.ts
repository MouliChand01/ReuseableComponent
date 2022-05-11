
import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-reusebale',
  templateUrl: './reusebale.component.html',
  styleUrls: ['./reusebale.component.css']
})
export class ReusebaleComponent implements OnInit {

  constructor( ) { }
  Selectvalue:any;
  

  @Input() userData:any;
  @Output() respons =new EventEmitter()

  ngOnInit(): void {
   }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }

  selectChange(){
    this.respons.emit(this.Selectvalue)
  //  console.log(this.Selectvalue)
  // this.name= this.name.filter((e:any) => e! == val);  dataloading
   }
}
