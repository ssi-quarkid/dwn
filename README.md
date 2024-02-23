# 01-core

DWN consiste en un nodo de red diseñado para la mensajería. Utiliza servicios de API REST como interfaz para interactuar con
aplicaciones descentralizadas. Emplea JWS para autorizar el acceso a los mensajes y JWE para asegurar que solo el receptor o el creador del mensaje pueda leer su contenido. Además,
se basa en redes de identificación descentralizada para verificar ambas claves públicas y replica los mensajes en otros nodos de la red de mensajería.
Se implementan protocolos TLS/SSL para garantizar la seguridad de la base de datos, y se utiliza HTTPS para el servicio de APIs, asegurando así la confidencialidad y la integridad de
la información transmitida en ambos casos.

## Tecnologías

La aplicación cuenta con las siguientes técnologias:

NodeJs
TypeScript

Local server install
nvm install 14.19
nvm use 14.19
npm install
node server.mjs

## Variables de Entorno

Variables de entorno de la aplicación

- PORT_DWN MAIN PORT
- PORT_CLI cli ipfs port
- PORT_IPFS ipfs node port
- MODENA_RESOLVER did resolver
- DDBB_MODE ddbb mode ( maria-db/rocks-db/level-db)
- DDBB_CONN in case using maria db
- DEFAULT_RESOLVER quarkid proxy did resolver
- TZ: America/Argentina/Buenos_Aires
- PORT_DWN: 8080
- DEFAULT_RESOLVER: 'https://url_resolve/resolve'

## Logs

Los logs del proceso se encuentran disponibles:

### DEV o QA:

URL: https://kibana-openshift-logging.apps.ocp4-dev.gcba.gob.ar (autentica contra AD)

Deben crear el index-pattern: app-*

En la seccion Discover podran filtrar los logs por app clickeando sobre "Add a filter +"  y agregando los siguientes filtros:

kubernetes.namespace_name is {namespace}
Ej: kubernetes.namespace_name is identidad-soberana-qa
kubernetes.container_name is {componente}
Ej: kubernetes.container_name is dwn

Namespaces:
- identidad-soberana-dev
- identidad-soberana-qa

Componente:
- dwn

### HML o PRD:

URL: https://ops-view.gcba.gob.ar/ (autentica contra AD)

Entrar en Kibana, luego Discover, clickear sobre lemu-demolime-* y seleccionar el indice lemu-openshift-*
Podran filtrar los logs por app clickeando sobre "Add a filter +"  y agregando los siguientes filtros:

op_cluster is {cluster}
Ej: op_cluster is hml
op_namespace is {componente}
Ej: op_container is dwn

Clusters
- hml
- prodint
- prodext (en su caso usarian prodext porque su web es publica .buenosaires)

Componente
- dwn


## Requerimientos de red

La aplicación debe tener conectividad a internet y ser accesible por el Message manager

## Ruta de acceso

Ambiente            URL
- DEV         https://quarkid-dwn-dev.gcba.gob.ar/
- QA          https://dwn-qa.gcba.gob.ar
- HML         https://dwn-hml.gcba.gob.ar
- PROD        https://dwn-ssi.buenosaires.gob.ar/

