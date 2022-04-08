FROM node:14-alpine

WORKDIR /usr/app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000 2222

CMD yarn start:prod