import { Injectable } from '@angular/core';
import { Server } from '../Server/server';

@Injectable()
export class ServerService{

    private servers: Array<Server>=[];
    v_index:number=0;
    v_id:number;
    constructor() { }
    
    getServer(): Server[]{
        return this.servers;
    }

    addServer(server: Server){
        this.servers.push(server);
    }

    updateServer(server:Server){
        this.v_id=server.id;
        for (var i=0; i<this.servers.length;i++){
            if(this.servers[i].id===this.v_id){
                this.v_index=i;
                break;
            }
        }
        this.servers.splice(this.v_index,1);
        this.servers.push(server);
    }

    deleteServer(server: Server){
        this.servers.splice(this.servers.indexOf(server),1);
    }

}