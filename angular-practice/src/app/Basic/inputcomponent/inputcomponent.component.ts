import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputcomponent',
  templateUrl: './inputcomponent.component.html',
  styleUrls: ['./inputcomponent.component.css']
})
export class InputcomponentComponent implements OnInit {
  status :string = "Server is not created";
  twoWayBinding: string = "Two way Binding";

  updateStatus(event: any){
    this.status = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }

}
