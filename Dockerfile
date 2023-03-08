FROM node:18.14.1 AS builder

ENV NODE_ENV production

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]