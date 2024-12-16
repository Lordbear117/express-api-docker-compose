# Imagen base ligera de Node.js
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production && rm -rf /root/.npm

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]