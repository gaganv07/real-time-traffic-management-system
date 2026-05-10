FROM node:20-alpine AS base
WORKDIR /app
COPY package.json tsconfig.base.json ./
COPY packages/shared ./packages/shared
COPY services/api ./services/api
RUN npm install
RUN npm run build --workspace @traffic/shared && npm run build --workspace @traffic/api
WORKDIR /app/services/api
CMD ["npm", "run", "start"]

