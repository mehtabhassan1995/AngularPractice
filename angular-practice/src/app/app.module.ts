import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { DbcomponentComponent } from './dbcomponent/dbcomponent.component';
import { PbcomponentComponent } from './pbcomponent/pbcomponent.component';
import { EbcomponentComponent } from './ebcomponent/ebcomponent.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';

@NgModule({
  declarations: [
    // AppComponent,
    FirstcomponentComponent,
    DbcomponentComponent,
    PbcomponentComponent,
    EbcomponentComponent,
    InputcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstcomponentComponent]
})
export class AppModule { }
