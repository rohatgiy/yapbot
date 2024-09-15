# Use the official Node.js image to build the React app
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the React app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY  nginx.conf /etc/nginx/conf.d
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
