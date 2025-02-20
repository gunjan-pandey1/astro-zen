# Use the official Caddy image with Alpine as the base
FROM caddy:alpine

# Update and install Node.js and npm for building Astro.js
RUN apk update && apk add --no-cache nodejs npm

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Astro.js project files into the container
COPY . .

# Install project dependencies
RUN npm install

# Build the Astro.js project
RUN npm run build

# Use Caddy to serve the built Astro.js project
COPY ./Caddyfile /etc/caddy/Caddyfile

# Expose port 80
EXPOSE 80

# Start Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
