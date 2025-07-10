# Node.js + Fastify + Drizzle + Docker + PostgreSQL + TypeScript — Boilerplate

Este repositório é uma estrutura inicial para projetos backend modernos com:

- Node.js (v20+ com suporte nativo a TypeScript)
- Fastify (framework web rápido e minimalista)
- Drizzle ORM (para banco de dados PostgreSQL)
- Docker (ambiente isolado e containerizado)
- TypeScript com configuração otimizada
- Biome (formatação e linting com ultracite)

---

## 🚀 Setup Inicial

### 1. Inicializar projeto com PNPM

```bash
pnpm init
pnpm i typescript @types/node -D
npx tsc --init
```

### 2. Configurar `tsconfig.json`

- Busque um `tsconfig` base atualizado compatível com a sua versão do Node no repositório oficial.
- Substitua seu `tsconfig.json` pelo arquivo copiado do npm.
- Adicione as opções:

```json
{
  "noEmit": true,
  "allowImportingTsExtensions": true
}
```

> **Explicação:**  
> - `"noEmit": true` impede a geração de arquivos `.js`, pois Node 20+ entende TS nativamente.  
> - `"allowImportingTsExtensions": true` permite importar arquivos `.ts` diretamente.

### 3. Atualizar `package.json`

Adicione:

```json
"type": "module"
```

Para habilitar módulos ES no Node.js.

---

## 📦 Instalar Dependências Principais

```bash
pnpm i fastify @fastify/cors fastify-type-provider-zod zod postgres drizzle-orm
pnpm i drizzle-kit drizzle-seed -D
pnpm i @biomejs/biome -D
```

---

## 🛠️ Scripts Úteis

No `package.json`, crie scripts:

```json
{
  "scripts": {
    "dev": "node --experimental-strip-types src/server.ts",
    "start": "node --experimental-strip-types src/server.ts",
    "biome:init": "npx ultracite init"
  }
}
```

> Use `dev` para desenvolvimento com watch (se implementar), `start` para produção.

---

## 🐳 Docker (Containerização)

- Use o Docker para criar ambientes isolados e consistentes.
- Comandos úteis:

```bash
docker ps               # lista containers ativos
docker compose up -d    # sobe containers em segundo plano (detach)
```

---

## 📚 Drizzle ORM e Migrations

Para trabalhar com banco PostgreSQL e Drizzle:

```bash
npx drizzle-kit generate   # gera arquivos de migração
npx drizzle-kit migrate    # executa migrações no banco
npx drizzle-kit studio     # interface visual para migrações
```

---

## 🌱 Populando o banco (Seed)

```bash
pnpm i drizzle-seed -D
```

Utilize o `drizzle-seed` para popular dados iniciais no banco.

---

## 🧹 Ordem Recomendada de Criação dos Arquivos e Módulos

1. `server.ts` — entrada principal do servidor Fastify  
2. `config/` — configuração geral e variáveis de ambiente  
3. `env.ts` — validação e tipagem das variáveis de ambiente  
4. `docker/` — arquivos Dockerfile, docker-compose.yml etc  
5. Configuração do `biome` — formatação e linting  
6. `db/` — conexão, schema e migrations com Drizzle  
7. Rotas e controllers HTTP

---

## 📖 Referências e Links Úteis

- [Fastify](https://www.fastify.io/)  
- [Drizzle ORM](https://orm.drizzle.team/)  
- [Biome (Ultracite)](https://biomejs.dev/)  
- [Docker](https://docs.docker.com/)  
- [Node.js ES Modules](https://nodejs.org/api/esm.html)  

---
