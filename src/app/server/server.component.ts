import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Server } from './server';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent implements OnInit {
  public servers: Array<Server>=[];
  //servers: Server[];
  serverForm: boolean=false;
  editServerForm: boolean=false;
  isNewForm: boolean;
  newServer: any={};
  editedServer: any = {};
  envProd: string='Production';
  envTest: string='Test';
  envDev: string='Development';

  constructor(private serverService:ServerService) { }

  ngOnInit() {
    this.getServers();
  }

  getServers(){
    this.servers=this.serverService.getServer();
  }

  showAddServerForm() {
    // resets form if edited product
    if(this.servers.length) {
      this.newServer = {};
    }
    this.serverForm = true;
    this.isNewForm = true;
  }

  saveServer(server: Server) {
    if(this.isNewForm) {
      // add a new server
      this.serverService.addServer(server);
    }
    this.serverForm = false;
  }

  showEditServerForm(server:Server){
    if (!server){
      this.serverForm=true;
      return;
    }
    this.editServerForm=true;
    //this.editedServer=
    //this.serverService.updateServer(server);
  }

  removeServer(server:Server){
    this.serverService.deleteServer(server);
  }
}
