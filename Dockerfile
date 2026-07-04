FROM node:22.16.0-alpine AS base
# set working directory
WORKDIR /usr/src/app

# --------- Install dependencies stage ---------
FROM base AS install-deps
# copy package.json and package-lock.json
COPY package.json package-lock.json ./
# install production dependencies only
RUN npm ci --omit=dev

# --------- Build stage ---------
FROM base AS build
# install all dependencies (including devDependencies for tsc)
COPY package.json package-lock.json ./
RUN npm ci
# copy source code
COPY . .
# compile the application
RUN npm run build

# --------- Runtime stage ---------
FROM base AS runtime
# copy production dependencies and compiled output from build stage
COPY --from=install-deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
# copy package.json
COPY package.json ./
# set environment variables
ENV NODE_ENV=production
# start the application (override per service in docker-compose.yaml)
CMD ["node", "dist/api/app.js"]
