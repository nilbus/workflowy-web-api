FROM node:6
# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
WORKDIR /usr/src/app/
COPY package.json .
RUN npm install
COPY . .
ENV PORT 8089
EXPOSE $PORT
CMD ["npm", "start"]
