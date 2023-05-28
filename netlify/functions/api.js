// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
const express = require('express');
const serverless = require('serverless-http');
export async function handler(event, context) {
  const api = express();
  const router = express.Router();
  router.get('/', (req, res) => res.send('api'));
  router.get('/hello', (req, res) => res.send('Hello World!'));
  router.get('/wallet', (req, res) => res.send('wallet'));
  api.use('/', router);
  return serverless(api)(event, context);
}
