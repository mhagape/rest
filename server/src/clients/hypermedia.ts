import { Resource, LinkAllow } from 'media-types';

import { Client } from './domain';
import { getAvatarLink } from '../assets/links';
import { pathNameToUrl } from '../core';

export function toClientsWithHypermedia(req, res, clients: Client[]): Resource<Client[]> {
    return {
        resources: clients.map(c => toClientWithHypermedia(req, res, c)),
        links: [
            {
                title: "Clients' list",
                relation: 'self',
                href: pathNameToUrl(req, req.url || '').toString(),
                allow: ['read']
            }
        ]
    };
}

export function toClientWithHypermedia(req, res, client: Client): Resource<Client> {
    return {
        properties: client,
        links: [
            {
                title: `${client.firstName} ${client.lastName}'s avatar`,
                relation: 'icon',
                href: getAvatarLink(client.id).toString(),
                allow: ['read']
            },
            {
                title: `${client.firstName} ${client.lastName}`,
                relation: 'self',
                href: pathNameToUrl(req, `api/clients/${client.id}`).toString(),
                allow: ['read', 'delete']
            }
        ]
    };
}
