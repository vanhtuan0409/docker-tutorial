FROM node

# Create app directory
WORKDIR /var/dockertutorial

# Copy package.json + package-lock.json + yarn.lock from host machine
# into docker container
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
# This command is equal to `npm install`
RUN yarn install

# Bundle app source
COPY . .


EXPOSE 8000
CMD ["yarn", "start"]
