FROM node:13

RUN mkdir /app
WORKDIR /app

COPY ./main.js .
COPY ./package.json .

RUN yarn

CMD node main.js
