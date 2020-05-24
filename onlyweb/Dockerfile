FROM node:alpine

#this is for elasticbeanstalk port mapping
EXPOSE 80

WORKDIR /usr/app

#copy package.json file which is in the root of the build context
#to the working directory
#COPY ./package.json ./
COPY package.json .

#the command after RUN, is executed inside the image filesystem;
#which is the /usr/app directory in this case.
RUN npm install

#COPY ./ ./
#this copy is not needed if we use volume to reference to some local directory.
#but it should be here as a reference point in case of not using volumes or docker compose.
COPY . .

#the command after CMD, is executed inside the container.
#this is the default command to be executed when the container is up.
#if i want to override this command:
#docker run 2345423423 npm run test
CMD ["npm", "start"]
