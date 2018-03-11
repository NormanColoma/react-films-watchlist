FROM node:9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install && npm run build \
    && rm -rf src/ && rm yarn.lock && rm package-lock.json && rm -rf node_modules/ \
    && rm -rf public/
EXPOSE 3000
RUN npm i -g serve
CMD ["npm", "run", "start:production"]