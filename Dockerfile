FROM node:22.4.1-alpine3.20 AS builder

WORKDIR /app

# Install Dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy the rest of the files
COPY . .

# Build the server
RUN yarn run swagger-jsdoc
RUN yarn run build:prod

FROM node:22.4.1-alpine3.20 AS production

WORKDIR /app

# Install dependencies
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
RUN yarn install --production

# Copy the build files
COPY --from=builder /app/dist ./dist

ENTRYPOINT [ "yarn", "start" ]