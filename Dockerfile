FROM node:18.14.1 AS builder

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build
COPY ./app/build/index.html ./app/build/200.html


FROM nginx:latest

COPY ./etc/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/build /usr/share/nginx/html

EXPOSE 80