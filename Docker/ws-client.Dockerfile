FROM node:13.1.0-alpine

ADD ws-client /ws-client
WORKDIR /ws-client

RUN npm install

CMD [ "node", "main.js" ]