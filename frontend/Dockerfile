# node is the image we are starting from. 
# node is base on another image layer. Eg - Debian linux
FROM node:18-bullseye-slim

# Create app directory - directory to hold the application code inside the image
# Default location for all subsequent commands
WORKDIR /app

# Install app dependenciess
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Installing the node.js dependency 
RUN npm install

# Bundle app source
#  COPY ["<src>", "<dest>"]
COPY . .

# Makes sure port 3000 is available to the outside world (outside the container)
EXPOSE 3000

CMD [ "npm", "start" ]