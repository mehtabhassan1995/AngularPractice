import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { DbcomponentComponent } from './Basic/dbcomponent/dbcomponent.component';
import { PbcomponentComponent } from './Basic/pbcomponent/pbcomponent.component';
import { EbcomponentComponent } from './Basic/ebcomponent/ebcomponent.component';
import { InputcomponentComponent } from './Basic/inputcomponent/inputcomponent.component';
import { DirectivecomponentComponent } from './Basic/directivecomponent/directivecomponent.component';
import { UsercomponentComponent } from './Routing/usercomponent/usercomponent.component';
import { HomecomponentComponent } from './Routing/homecomponent/homecomponent.component';
import { UserListComponent } from './Routing/user-list/user-list.component';

const appRoutes: Routes = [
  { path: '', component: HomecomponentComponent},
  { path: 'users/:id', component: UsercomponentComponent},
  { path: 'users', component: UserListComponent}
]

@NgModule({
  declarations: [
    // AppComponent,
    FirstcomponentComponent,
    DbcomponentComponent,
    PbcomponentComponent,
    EbcomponentComponent,
    InputcomponentComponent,
    DirectivecomponentComponent,
    UsercomponentComponent,
    HomecomponentComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [FirstcomponentComponent]
})
export class AppModule { }
