import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbcomponent',
  templateUrl: './pbcomponent.component.html',
  styleUrls: ['./pbcomponent.component.css']
})
export class PbcomponentComponent implements OnInit {
  allowedServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowedServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

}
