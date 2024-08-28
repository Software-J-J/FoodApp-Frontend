FROM node:21-alpine3.19

RUN npm install -g pnpm

WORKDIR /usr/src/app
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

# Si es producción:
# RUN pnpm build

EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["pnpm", "dev"]  
