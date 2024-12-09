FROM node:18.1-alpine

WORKDIR /home/jwat-nodejs-practice

COPY . /home/jwat-nodejs-practice

RUN npm i

ENV PORT=8000

EXPOSE 8000

CMD ["node", "./index"]