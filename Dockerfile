FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY .next .next/
COPY public public/
COPY next.config.js .

RUN adduser -D myuser
USER myuser
CMD npm run start -- -p $PORT
