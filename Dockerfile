FROM node:18.14.1 AS builder

ENV NODE_ENV production

WORKDIR /app

COPY ./package.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm i --save-dev @types/react-router-bootstrap

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf