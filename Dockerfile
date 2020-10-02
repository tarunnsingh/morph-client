FROM node:12.18.4-alpine

WORKDIR /app

EXPOSE 3000

COPY --chown=node:node package*.json ./

RUN npm install --only=production && npm cache clean --force

COPY --chown=node:node . .

USER node

CMD ["npm", "start"]