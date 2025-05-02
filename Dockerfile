FROM node:22.4.1-alpine3.20 AS builder

WORKDIR /app

# Install Dependencies
COPY package*.json .
RUN npm install

# Copy the rest of the files
COPY . .

# Build the server
RUN npm run build:prod

FROM node:22.4.1-alpine3.20 AS production

WORKDIR /app

# Install dependencies
COPY --from=builder /app/package*.json .
RUN npm install --production

# Copy the build files
COPY --from=builder /app/dist ./dist

ENTRYPOINT [ "npm", "start" ]