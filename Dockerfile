FROM node:8-alpine
WORKDIR .
COPY . .
RUN apk add --no-cache --virtual .gyp python make g++
RUN npm install
RUN apk del .gyp
CMD [ "node", "index.js" ]