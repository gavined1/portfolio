# Use the official Node.js image as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose port 3000 (Next.js default port)
EXPOSE 3000

# Start the Next.js app in production mode
CMD ["npm", "start"]
