import { Component, OnInit } from '@angular/core';

import { ClientsService, Client } from 'app/clients.service';

@Component({
  selector: 'ui-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: Promise<Client[]>;

  constructor(private _clients: ClientsService) {
  }

  ngOnInit(): void {
    this._loadClients();
  }

  removeClient(client: Client): void {
    this
      ._clients
      .removeClient(client.id)
      .then(() => this._loadClients());
  }

  private _loadClients(): void {
    this.clients = this._clients.getClients();
  }
}
