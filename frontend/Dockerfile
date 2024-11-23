FROM node:22

WORKDIR /app

#Copiando apenas os arquivos necessários
COPY package*.json ./

#Instalando dependências os arquivos
RUN npm install

#Copia o restante do projeto
COPY . .



RUN npm run build
CMD ["npm", "run", "dev"]

EXPOSE 80
