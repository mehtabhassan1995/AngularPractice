import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbcomponent',
  templateUrl: './dbcomponent.component.html',
  styleUrls: ['./dbcomponent.component.css']
})
export class DbcomponentComponent implements OnInit {

  component: string = 'Data Binding Component';

  constructor() { }

  ngOnInit(): void {
  }

}
