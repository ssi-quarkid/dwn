# Decentrilized Web Node 
## Deploy process
### build image: 
- from your computer
docker build -t http://extrimianpublic.azurecr.io/dwn-extrimer:1.0.0 .

### Upload Image: 
- from your computer
docker image push extrimianpublic.azurecr.io/dwn-extrimer:1.0.0

- Login: 
docker login http://extrimianpublic.azurecr.io/  --username extrimianpublic --password XXXXXXX

### Download image: 
- from the server run
docker image pull http://extrimianpublic.azurecr.io/dwn-extrimer:1.0.0


// the app will use this ports, remember to expose ports 1337 4002 4003 in the server

## Prep DEV ENV
- nvm use 14.19
- npm install
- node server.mjs

## Local server install
- nvm install 14.19
- nvm use 14.19
- npm install
- node server.mjs

## ENV VARS
-PORT_DWN MAIN PORT
-PORT_CLI cli ipfs port
-PORT_IPFS ipfs node port
-MODENA_RESOLVER did resolver
-DDBB_MODE ddbb mode ( maria-db/rocks-db/level-db)
-DDBB_CONN in case using maria db
-DEFAULT_RESOLVER quarkid proxy did resolver


## How to use API

postman collecion available //not self explained yet
