FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY ./src ./src

RUN npx tsc

EXPOSE 8080

CMD ["node", "dist/app.js"]
