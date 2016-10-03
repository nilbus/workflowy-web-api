FROM node:6
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
WORKDIR /usr/src/app/
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
