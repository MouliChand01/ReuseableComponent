import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ReusebaleComponent } from './reusebale/reusebale.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit ,AfterViewChecked{
  title = 'ReuseableComponent';
  userData=[{name:"self",age:24,sal:"10,000"},
            {name:"wife",age:24,sal:"20,000"},
            {name:"child-1",age:24,sal:"30,000"},
            {name:"child-2",age:24,sal:"40,000"},
            {name:"child-3",age:24,sal:"40,000"}];
  dcomp:any;
  
  @ViewChild('parent', { read: ViewContainerRef }) container: any;
  constructor(private resolver: ComponentFactoryResolver,private cdref: ChangeDetectorRef) {
}
  ngAfterViewChecked(): void {
   this.cdref.detectChanges()
  }
 
  ngAfterViewInit(): void {
    this.createChild();
  }
  ngOnInit(): void {
    
  }
   
  createChild() {
    // debugger
    const dynamiccomponent = this.resolver.resolveComponentFactory(ReusebaleComponent);
    this.dcomp=this.container.createComponent(dynamiccomponent).instance;
    this.dcomp.userData=this.userData
    this.dcomp.respons.subscribe((e:any)=>this.getuserData(e))
  }
  getuserData(val:any){
   this.userData=this.userData.filter((e:any)=>e.name != val);
  }
}

