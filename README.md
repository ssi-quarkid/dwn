## Descripción

DWN consiste en un nodo de red diseñado para la mensajería. Utiliza servicios de API REST como interfaz para interactuar con aplicaciones descentralizadas. Emplea JWS para autorizar el acceso a los mensajes y JWE para asegurar que solo el receptor o el creador del mensaje pueda leer su contenido. Además, se basa en redes de identificación descentralizada para verificar ambas claves públicas  replica los mensajes en otros nodos de la red de mensajería.
Se implementan protocolos TLS/SSL para garantizar la seguridad de la base de datos, y se utiliza HTTPS para el servicio de APIs, asegurando así la confidencialidad y la integridad de la información transmitida en ambos casos.

## Tecnologías

- Node  14.19.3
- KOA   2.13.1
- IPFS  0.10.0
- MongoDB latest

## Diagrama

## Licencia

Copyright [2023] [Gobierno de la Ciudad de Buenos Aires]

Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
no puede utilizar este archivo excepto de conformidad con la Licencia.
Puede obtener una copia de la Licencia en

[LICENSE](http://www.apache.org/licenses/LICENSE-2.0)

A menos que lo exija la ley aplicable o se acuerde por escrito, el software
distribuido bajo la Licencia se distribuye "TAL CUAL",
SIN GARANTÍAS NI CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
Consulte la Licencia para conocer el idioma específico que rige los permisos y
limitaciones bajo la Licencia.

## Instalación

```bash
nvm install 14.19
nvm use 14.19
npm install
node server.mjs
```
## Variables de Entorno

### Generales

- PORT_DWN MAIN PORT
- PORT_CLI cli ipfs port
- PORT_IPFS ipfs node port
- MODENA_RESOLVER did resolver
- DDBB_MODE ddbb mode ( maria-db/rocks-db/level-db)
- DDBB_CONN in case using maria db
- DEFAULT_RESOLVER quarkid proxy did resolver

## Healthcheck

Para comprobar la salud del servicio basta con navegar la url base con una / al final, retornara un Status 200, con la info correspondiente.

## Requerimientos de red

La aplicación debe tener conectividad a internet y ser accesible por el Message manager

## Ruta de acceso

- [DEV](https://quarkid-dwn-dev.gcba.gob.ar/)
- [QA](https://dwn-qa.gcba.gob.ar/)
- [HML](https://dwn-hml.gcba.gob.ar/)
- [PROD](https://dwn-ssi.buenosaires.gob.ar/)

