FROM node:20-alpine
WORKDIR /app
COPY package.json tsconfig.base.json ./
COPY packages/shared ./packages/shared
COPY apps/web ./apps/web
RUN npm install
RUN npm run build --workspace @traffic/shared && npm run build --workspace @traffic/web
WORKDIR /app/apps/web
CMD ["npm", "run", "start"]

