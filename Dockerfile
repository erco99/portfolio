# Use the official Node.js 20 image with Debian Bookworm as the base
FROM node:20-bookworm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) to the working directory
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (for example, transpile TypeScript or bundle front-end)
RUN npm run build

# Set the environment variable to production
ENV NODE_ENV=production

# Expose port 3000 to allow communication to/from the container
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

