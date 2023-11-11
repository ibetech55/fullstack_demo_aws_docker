# Use an official Node.js image as the build environment
FROM node:16.20.2


# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app source code to the container
COPY . .

# Build the React app
RUN npm run build