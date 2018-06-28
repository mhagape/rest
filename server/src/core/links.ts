import { Link } from 'media-types';

import { Request } from '../../node_modules/@types/restify';
import { pathNameToUrl } from './url';

export function linkToSelf(req: Request, { title }: { title?: string } = {}): Link {
    return {
        title: title,
        relation: 'self',
        href: pathNameToUrl(req, req.url || '').toString()
    };
}
