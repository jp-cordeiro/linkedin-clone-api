#!/bin/sh

if [ ! -f ".env" ]; then
   cp .env.example .env
fi

sleep 20s

echo "generating database"
yarn db:create

echo "running migrations"
yarn typeorm migration:run

yarn start:debug