FROM ubuntu:latest

# update server
RUN apt-get update -y && apt-get upgrade -y

# install nodejs
RUN apt-get install -y nodejs npm

# set working directory
WORKDIR /app

# copy source code
COPY . /app

# install dependencies
RUN npm install

# expose port
EXPOSE 3000

# start server
CMD ["npm", "start"]