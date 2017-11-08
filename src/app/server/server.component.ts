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
  servers: Array<Server>=[];
  //servers: Server[];
  serverForm: boolean=false;
  editServerForm: boolean=false;
  isNewForm: boolean;
  newServer: any={};
  editedServer: any = {};
  envProd: string='Production';
  envTest: string='Test';
  envDev: string='Development';

  constructor() { }

  ngOnInit() {
    this.getServers();
  }

  getServers(){

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
      // add a new product
      //this._productService.addProduct(product);
    }
    this.serverForm = false;
  }
}
