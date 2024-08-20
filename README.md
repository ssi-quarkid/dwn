# DWN

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Architecture](#architecture)
- [Documentation](#documentation)
- [Configurations](#configurations)
  - [Local Environment](#local-environment)
  - [Environment Variables](#environment-variables)
  - [Steps to Install the Component on a Server](#steps-to-install-the-component-on-a-server)

## Description

DWN is a network node designed for messaging. It uses REST API services as an interface to interact with decentralized applications. It employs JWS to authorize access to messages and JWE to ensure that only the recipient or creator of the message can read its content. Additionally, it relies on decentralized identification networks to verify both public keys and replicates messages to other nodes in the messaging network. TLS/SSL protocols are implemented to ensure database security, and HTTPS is used for the API service, thus ensuring the confidentiality and integrity of the information transmitted in both cases.

## Technologies

The application uses the following technologies:

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

## Architecture
[Diagram](https://docs.quarkid.org/en/Arquitectura/)

## Documentation
[Link](https://docs.quarkid.org/en/Arquitectura/componentes/)

## Configurations

### Local Environment

Clone the repository

- Open the project with your selected editor
- Open a terminal and execute:

```bash
- yarn
- yarn build
- yarn start
```

### Steps to Install the Component on a Server

1. Have an empty Linux server.
2. Install the component and its images, which can be found on [Dockerhub](https://hub.docker.com/r/quarkid/dwn). Remember that DWN also needs to be connected to a [mongodb](https://github.com/gcba/dwn/tree/master#tecnolog%C3%ADas-1).

To install a component from Docker Hub on your server, follow these steps:

1. Connect to the server.

2. Install Docker on the server:
If you don't have Docker installed on your server yet, follow the instructions to install Docker for your operating system. You can find detailed guides in the official Docker documentation.

3. Download the component image from Docker Hub using the `docker pull` command. You must specify the full name of the image, which includes the username or organization name on Docker Hub and the image name. Run the container:

```bash
docker pull quarkid/dwn
```

Once the component image has been downloaded to your server, you can run a container using the `docker run` command.

6. Verify that the container is running:
Use the `docker ps` command to verify that the container is running on your server.

### Environment Variables

#### General

Available in [Technology](#technologies) section

## Logs

N/A

## Network Requirements

The application must have internet connectivity and be accessible by the [Message manager](https://github.com/ssi-quarkid/message-manager).

## Access Route

N/A
