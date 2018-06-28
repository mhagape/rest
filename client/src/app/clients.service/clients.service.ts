import { Response } from '@angular/http';

import { Client } from './client.contract';
import { CollectionResource } from 'media-types/common';

export abstract class ClientsService {
  abstract getClientTemplate(): Promise<Client>;
  abstract addClient(client: Client): Promise<Response>;
  abstract updateClient(client: Client): Promise<Response>;
  abstract getClients(): Promise<CollectionResource<Client>>;
  abstract getClient(id: string): Promise<Client>;
  abstract removeClient(id: string): Promise<Response>;
}
