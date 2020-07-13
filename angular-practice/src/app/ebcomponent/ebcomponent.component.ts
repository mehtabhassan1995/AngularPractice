import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebcomponent',
  templateUrl: './ebcomponent.component.html',
  styleUrls: ['./ebcomponent.component.css']
})
export class EbcomponentComponent implements OnInit {
  serverStatus :string = "not created";
  allowedServer = false;

  constructor() { 
    setTimeout(() => {
      this.allowedServer = true;
    }, 2000);
  }

  createServer(){
    this.serverStatus = "created";
  }

  ngOnInit(): void {
  }

}
