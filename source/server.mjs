import * as fs from 'fs';
import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-body';
import Static from 'koa-static';
import { dirname } from 'path';
import { stringify } from 'querystring';
import { fileURLToPath } from 'url';
import { IdentityHub } from './main.mjs';
import Status from './lib/status.mjs';
import cors from '@koa/cors';
import * as dotenv from 'dotenv'


const app = new Koa();
app.use(cors());

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = new Router();
const PORT = process.env.PORT_DWN;

const config = JSON.parse(fs.readFileSync(__dirname + '/config.json'));

const textDecoder = new TextDecoder();
function decodeArray(data){
  return data instanceof Uint8Array ? textDecoder.decode(data) : data;
}

let decodeEd25519keys = JSON.parse(fs.readFileSync(__dirname + '/vectors/ed25519.json'));
    decodeEd25519keys = Buffer.from(decodeEd25519keys.data,'base64');
    decodeEd25519keys = decodeEd25519keys.toString('utf8');

let decodeSecp256k1Keys = JSON.parse(fs.readFileSync(__dirname + '/vectors/secp256k1.json'));  
    decodeSecp256k1Keys = Buffer.from(decodeSecp256k1Keys.data , 'base64');
    decodeSecp256k1Keys = decodeSecp256k1Keys.toString('utf8');

const testDID = decodeArray(fs.readFileSync(__dirname + '/vectors/did.txt'));
const ed25519Keys = JSON.parse(decodeEd25519keys);
const secp256k1Keys = JSON.parse(decodeSecp256k1Keys);



async function getHub(did){
  return IdentityHub.load(did, {
    signing: ed25519Keys
  }); 
}

router.post('/:did/table/:table', async (ctx) => {
  let hub = await getHub(ctx.params.did);
  let result = await hub.storage.txn(db => db(ctx.params.table).query('select').exec()).catch(e => console.log(e));
  console.log(123, result);
  ctx.body = result;
});

router.post('/:did/id/:id', async (ctx) => {
  let hub = await getHub(ctx.params.did);
  let result =  await hub.storage.get('collections', ctx.params.id)
  console.log(123, result);
  ctx.body = result;
});

router.post('/upload', async (ctx) => {
  let body = ctx.request.body;
  let hub = await getHub(body.target);
  let request = await hub.generateRequest({
    messages: [await hub.composeMessage({
      descriptor: body.descriptor,
      data: body.data,
      sign: true
    })]
  })
  
  let response = await hub.handleRequest(request);
  ctx.body = response;
});

router.post('/', async (ctx) => {
  let request = ctx.request.body;
  console.log(new Date().toUTCString() +  " -- Request parametros input")
  console.log(request)
  console.log(new Date().toUTCString() +  " -- Parametros ")
  console.log(ctx.request)
  console.log(new Date().toUTCString() + " -- Parametros full: " + stringify(ctx.request.body))
  console.log(new Date().toUTCString() +  " -- Request Body")

  let hub = await getHub(request.target);
  try {
    ctx.body = await hub.handleRequest(request);
  }
  catch (e) {
    console.log(e);
    ctx.status = 500;
    ctx.body = {
      status: Status.getStatus(500)
    };
  }
  console.log(new Date().toUTCString() + " -- OK API")
});

router.get('/healthcheck', (ctx) => {
  ctx.status = 200;
});

app.use(Static(__dirname));
app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  console.log('all systems online, Server running full speed on port ' + PORT);
});
