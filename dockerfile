FROM node:22-alpine
WORKDIR /app

COPY package.json pnpm-lock.yaml /app
RUN npm install
RUN npm install -g pnpm

CMD ["npm"]


