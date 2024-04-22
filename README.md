## [Descripción](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#descripci%C3%B3n)
## [Tecnologías](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#tecnolog%C3%ADas)
## [Arquitectura](https://docs.quarkid.org/Arquitectura/) y [Documentación](https://docs.quarkid.org/Arquitectura/componentes/)
## Configuraciones:
### 1. [Entorno local](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#configuraci%C3%B3n-de-entorno-local)
### 2. [Variables de entorno](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#configuraci%C3%B3n-de-entorno-local)
### 3. [Pasos para instalar el componente en un servidor](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#pasos-para-instalar-el-componente-en-un-servidor)
## [Licencia](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#licencia)






----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Descripción

DWN consiste en un nodo de red diseñado para la mensajería. Utiliza servicios de API REST como interfaz para interactuar con
aplicaciones descentralizadas. Emplea JWS para autorizar el acceso a los mensajes y JWE para asegurar que solo el receptor o el creador del mensaje pueda leer su contenido. Además,
se basa en redes de identificación descentralizada para verificar ambas claves públicas y replica los mensajes en otros nodos de la red de mensajería.
Se implementan protocolos TLS/SSL para garantizar la seguridad de la base de datos, y se utiliza HTTPS para el servicio de APIs, asegurando así la confidencialidad y la integridad de
la información transmitida en ambos casos.

## Tecnologías

La aplicación cuenta con las siguientes técnologias:

- NodeJs v14
- NodeJs v16
- TypeScript
- Local server install
```bash
cd source
npm install
export PORT_DWN="1337"
export PORT_CLI="4002"
export PORT_IPFS="4003"
export RESOLVER="https://demo.extrimian.com/sidetree-proxy/resolve"
export DDBB_MODE="RockDB"
export DATABASE_URL_CONN="mongodb://localhost:27017"
node server.mjs
```

## Arquitectura
[Diagrama](https://docs.quarkid.org/Arquitectura/)

## Documentación
[Link](https://docs.quarkid.org/Arquitectura/componentes/)

## Configuración de entorno local

Clonar el repositorio

- Abrir el proyecto con el editor seleccionado
- Abrir una terminal y ejecutar:

```bash
- yarn
- yarn build
- yarn start
```

## Pasos para instalar el componente en un servidor

1. Contar con Linux vacío. 
2. Instalar el componente y sus imágenes, se encuentran [Dockerhub](https://hub.docker.com/r/quarkid/dwn). Recuerde también que el DWN necesita estar conetado a una [mongodb](https://github.com/gcba/dwn/tree/master#tecnolog%C3%ADas-1).

Para instalar un componente desde Docker Hub en tu servidor, sigue estos pasos:

1. Conéctate al servidor.

2. Instala Docker en el servidor:
Si aún no tienes Docker instalado en tu servidor, sigue las instrucciones para instalar Docker en tu sistema operativo. Puedes encontrar guías detalladas en la documentación oficial de Docker.

3. Descarga la imagen del componente desde Docker Hub utilizando el comando
   
```bash
'docker pull'
```

Debes especificar el nombre completo de la imagen, que incluye el nombre del usuario o la organización en Docker Hub y el nombre de la imagen. Ejecuta el contenedor: 

```bash
docker pull docker pull quarkid/dwn
```

Una vez que la imagen del componente se haya descargado en tu servidor, puedes ejecutar un contenedor utilizando el comando

```bash
'docker run'.
```

6. Verifica que el contenedor esté en ejecución:
Utiliza el comando docker ps para verificar que el contenedor esté en ejecución en tu servidor.

## Variables de Entorno

### Generales

Disponibles en [Tecnología](https://github.com/gcba/dwn/tree/master?tab=readme-ov-file#tecnolog%C3%ADas)

## Logs

N/A

## Requerimientos de red

La aplicación debe tener conectividad a internet y ser accesible por el [Message manager](https://github.com/gcba/message-manager/tree/master).

## Ruta de acceso

N/A

## Licencia
Derechos de autor © 2023 Gobierno de la Ciudad de Buenos Aires

Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
usted no puede utilizar este archivo excepto en cumplimiento con la Licencia.
Puede obtener una copia de la Licencia en
http://www.apache.org/licenses/LICENSE-2.0.
A menos que lo requiera la ley aplicable o se acuerde por escrito, el software
distribuido bajo la Licencia se distribuye "TAL CUAL",
SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sean expresas o implícitas.
Consulte la Licencia para el idioma específico que rige los permisos y
limitaciones bajo la Licencia.
