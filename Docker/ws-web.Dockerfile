FROM node:latest as build

RUN mkdir /app
WORKDIR /app

COPY public ./public
COPY src ./src
COPY package.json .

RUN yarn
RUN yarn build

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
