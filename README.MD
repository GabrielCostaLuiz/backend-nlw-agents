pnpm init

pnpm i typescript @types/node -D

npx tsc --init

procurar por tsconfig bases no google
ir no repositorio 
veja a versao do node que está utilizando no repositorio
clica no link que vai para pagina do npm
copia o arquivo que esta la e cola no tsconfig
adicione no tsconfig 
    "noEmit": true,
    "allowImportingTsExtensions": true,

noEmit por conta que n precisaremos fazer o build do projeto para js pois o node ja entende o ts, então n precisa compilar para .js os arquivos
allowImportingTsExtensions permite importar os arquivos em .ts

adicione type module no package json

pnpm i fastify @fastify/cors fastify-type-provider-zod zod  

a partir do node 20 ele ja entende nativamente ts, então utilizar node --experimental-strip-types no script para rodar o servidor já serve em vez de instalar tsx

sempre criar o script de dev e um de start, start para produção de dev para dev, normalmente é só sem o watch, pois em produção nao precisa

pnpm i @biomejs/biome -D
npx ultracite init

docker uma ferramenta util para criar ambientes isolados de desenvlvimento

docker ps mostra todos os containers que estão rodando

docker compose up -d (-d é tipo para rodar em segundo plano, n prender o terminal no docker)

pnpm i postgres

pnpm i drizzle-orm 

pnpm i drizzle-kit -D

npx drizzle-kit generate
npx drizzle-kit migrate
npx drizzle-kit studio

pnpm i drizzle-seed -D

ordem de criação server - config - env - docker - biome - db - http


