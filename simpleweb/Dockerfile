FROM node:alpine

WORKDIR /usr/app

#copy package.json file which is in the root of the build context
#to the working directory
#COPY ./package.json ./
COPY package.json .
RUN npm install
#COPY ./ ./
COPY . .

CMD ["npm", "start"]