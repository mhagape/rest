import * as restify from 'restify';
import * as cors from 'restify-cors-middleware';

import { default as bootstrapAssets } from './assets/bootstrap';
import { default as bootstrapClients } from './clients/bootstrap';

const server = restify.createServer();

/*
  Enable CORS
*/
const { preflight, actual } = cors({
  allowHeaders: ['*'],
  exposeHeaders: ['*'],
  origins: ['*']
});
server.pre(preflight);
server.use(actual);

/*
  Enable body parsing
*/
server.use(restify.plugins.bodyParser());

/*
  Start server
*/
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);

  /*
  Bootstrap handlers
  */
  bootstrapAssets(server);
  bootstrapClients(server);
});
