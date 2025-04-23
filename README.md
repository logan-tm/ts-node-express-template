# ts-node-express-template

A template for basic node express applications using TypeScript. This is meant to be incredibly basic with some best practices built in. That way, other projects can use this template as scaffolding.

## Features

- typescript, eslint, prettier
- environment variable management (dotenv)
- morgan logging and `debug` module logging
- custom error handling
- pm2 for production-ready deployments (check ecosystem.config.js)

## Getting started (dev)

- Create a new repo using this template, or clone this repo
- If using `nvm`, run `nvm use` at the root. Otherwise, ensure you're using node version 20 or greater (for now)
- `npm i --include=dev`
- `npm run start:dev`

## Getting started (prod)

- Create a new repo using this template, or clone this repo
- If using `nvm`, run `nvm use` at the root. Otherwise, ensure you're using node version 20 or greater (for now)
- `npm i`
- `npm run build && npm run start:prod`
