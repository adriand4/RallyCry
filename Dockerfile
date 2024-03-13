FROM node:current-alpine

WORKDIR /rallycry

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "dev"]