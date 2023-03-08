FROM node:18.14.1 AS builder

ENV NODE_ENV production

WORKDIR /app

COPY ./package*.json ./
RUN npm install --production

COPY . .

RUN npm run build

FROM nginx:latest

WORKDIR /app/build
RUN cp ./index.html 200.html

WORKDIR /app

COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html

EXPOSE 80