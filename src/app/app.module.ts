import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.route';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { MessagebrokerComponent } from './messagebroker/messagebroker.component';
import { DatabaseComponent } from './database/database.component';
import { AdministrationComponent } from './administration/administration.component';
import { NotificationComponent } from './notification/notification.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminroleComponent } from './adminrole/adminrole.component';
import { AdminmanageComponent } from './adminmanage/adminmanage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServerComponent,
    MessagebrokerComponent,
    DatabaseComponent,
    AdministrationComponent,
    NotificationComponent,
    AdminuserComponent,
    AdminroleComponent,
    AdminmanageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
