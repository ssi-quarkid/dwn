FROM node:14.19

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install && mv node_modules ../
COPY . .
EXPOSE 1337
EXPOSE 4002
EXPOSE 4003
RUN chown -R node /usr/src/app
USER node
RUN node --version
CMD ["node", "server.mjs"]
