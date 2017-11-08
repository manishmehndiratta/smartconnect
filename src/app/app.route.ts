import { Routes } from '@angular/router';

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

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'server', component: ServerComponent },
  { path: 'messagebroker', component: MessagebrokerComponent },
  { path: 'database', component: DatabaseComponent },
  { 
      path: 'administration', 
      component: AdministrationComponent,
      children: [
        { path: '', component: AdministrationComponent }, // url: admin/
        { path: 'adminuser', component: AdminuserComponent }, // url: admin/user
        { path: 'adminrole', component: AdminroleComponent }, // url: admin/role
        { path: 'adminmanage', component: AdminmanageComponent } // url: admin/manage
      ] 
    },
  { path: 'notification', component: NotificationComponent }
];