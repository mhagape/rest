import { Component, OnInit } from '@angular/core';

import { ClientsService, Client } from 'app/clients.service';
import { CollectionResource, SingleResource, Link } from 'media-types/common';

@Component({
  selector: 'ui-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients: Promise<CollectionResource<Client>>;

  constructor(private _clients: ClientsService) {
  }

  ngOnInit(): void {
    this._loadClients();
  }

  removeClient(client: SingleResource<Client>): void {
    this
      ._clients
      .removeClient(client.properties.id)
      .then(() => this._loadClients());
  }

  // TODO: pipe/memoize
  getAvatarLink(client: SingleResource<Client>): Link {
    return client.links.find(l => l.relation === 'icon');
  }

  private _loadClients(): void {
    this.clients = this._clients.getClients();
  }
}
