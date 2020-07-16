import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivecomponent',
  templateUrl: './directivecomponent.component.html',
  styleUrls: ['./directivecomponent.component.css']
})
export class DirectivecomponentComponent implements OnInit {
  twoWayBinding: string = "Two way Binding";
  conditionalDirective: boolean = false
  allowedServer: boolean = false;
  arrayList = ['1','2','3','4'];

  constructor() { 
    setTimeout(() => {
      this.allowedServer = true;
    }, 2000);
  }

  addText(){
    this.arrayList.push(this.twoWayBinding);
  }

  showText(){
    this.conditionalDirective = true;
  }

  ngOnInit(): void {
  }

}
