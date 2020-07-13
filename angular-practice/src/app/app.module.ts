import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { DbcomponentComponent } from './dbcomponent/dbcomponent.component';
import { PbcomponentComponent } from './pbcomponent/pbcomponent.component';
import { EbcomponentComponent } from './ebcomponent/ebcomponent.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { DirectivecomponentComponent } from './directivecomponent/directivecomponent.component';

@NgModule({
  declarations: [
    // AppComponent,
    FirstcomponentComponent,
    DbcomponentComponent,
    PbcomponentComponent,
    EbcomponentComponent,
    InputcomponentComponent,
    DirectivecomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FirstcomponentComponent]
})
export class AppModule { }
