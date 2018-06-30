import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { BASE_URL } from '../settings';
import { Client } from './client.contract';
import { ClientsService } from './clients.service';
import { CollectionResource, SingleResource } from 'media-types/common';

@Injectable()
export class ClientsRawService implements ClientsService {
  constructor(private _http: Http) {
  }

  getClientTemplate(): Promise<Client> {
    return Promise.resolve({});
  }

  addClient(client: Client): Promise<Response> {
    return this
      ._http
      .post(this._getClientsUrl(), client)
      .toPromise();
  }

  updateClient(client: Client): Promise<Response> {
    return this
      ._http
      .put(this._getClientUrl(client.id), client)
      .toPromise();
  }

  getClients(): Promise<CollectionResource<Client>> {
    return this
      ._http
      .get(this._getClientsUrl(), {
        headers: new Headers({
          'Accept': 'application/vnd.example+json'
        })
      })
      .toPromise()
      .then(r => r.json());
  }

  getClient(id: string): Promise<Client> {
    return this
      ._http
      .get(this._getClientUrl(id))
      .toPromise()
      .then(r => r.json());
  }

  removeClient(client: SingleResource<Client>): Promise<Response> {
    return this
      ._http
      .delete(client.links.find(l => l.relation === 'self' && l.allow.includes('delete')).href)
      .toPromise();
  }

  private _getClientsUrl(): string {
    return `${BASE_URL}/api/clients`;
  }

  private _getClientUrl(id: string): string {
    return `${BASE_URL}/api/clients/${id}`;
  }
}
