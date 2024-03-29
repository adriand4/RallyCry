FROM node:current-alpine

WORKDIR /rallycry

COPY . .

ENV PORT 8081

RUN npm install

RUN npm run build

CMD ["npm", "run", "start"]