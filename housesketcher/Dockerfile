FROM node:16.15.0 as build-stage

WORKDIR /var/lib/jenkins/workspace/homesketcher/housesketcher

COPY package*.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /var/lib/jenkins/workspace/homesketcher/housesketcher/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g","daemon off;"]