# wersja produkcyjna
FROM node:alpine as builder
WORKDIR /opt/app
COPY ./package.json ./
RUN npm install
COPY . .
CMD [ "npm", "build" ]

# nginx
FROM nginx
COPY --from=builder /opt/app/build /usr/share/nginx/html