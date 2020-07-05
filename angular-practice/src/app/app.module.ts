import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { DbcomponentComponent } from './dbcomponent/dbcomponent.component';

@NgModule({
  declarations: [
    // AppComponent,
    FirstcomponentComponent,
    DbcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FirstcomponentComponent]
})
export class AppModule { }
