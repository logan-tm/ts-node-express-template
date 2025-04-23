(Assuming nvm is installed)

## TypeScript / Node Setup

`echo "20" > .nvmrc && nvm use` (or whatever version you require)
`npm init` (follow prompts, then change `type` to "module")
`npm i tsx && npm i -D typescript @types/node nodemon`

`npx tsc --init`
Change `rootDir` to "./src"

## Express Setup

`npm i cookie-parser debug dotenv express http-errors morgan`
`npm i -D @types/express @types/morgan`
Copy index file with express code into `src/index.ts`
