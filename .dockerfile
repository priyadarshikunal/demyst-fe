FROM node:20-alpine3.18
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build
EXPOSE 1234
CMD [ "npm", "start" ]
