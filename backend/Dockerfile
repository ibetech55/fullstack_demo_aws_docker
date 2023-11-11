FROM node:16.20.2

EXPOSE 4000

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]