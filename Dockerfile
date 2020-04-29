FROM node:latest
LABEL Hansel M. Rojas <co.hanselmorales@gmail.com>

ENV TZ=America/Bogota
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /web-libreria
COPY ./package.json ./
RUN npm install --production-only

COPY ./ ./
RUN npm run build

EXPOSE 4000
CMD npm start
