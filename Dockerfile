# Step 1: Use an official Node.js image as the base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the app's source code to the working directory
COPY . .

# Step 6: Expose port 3000 (React default port)
EXPOSE 3000

# Step 7: Start the React development server
CMD ["npm", "start"]