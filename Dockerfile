# syntax=docker/dockerfile:1

############################################
# 1) Dependencies
############################################
FROM node:20-alpine AS deps
WORKDIR /app

# For native deps if any
RUN apk add --no-cache libc6-compat

# Copy dependency descriptors (if present)
COPY package.json ./
COPY package-lock.json* ./
COPY yarn.lock* ./
COPY pnpm-lock.yaml* ./
COPY .npmrc* ./
COPY .yarnrc* ./
COPY .yarnrc.yml* ./

# Install dependencies based on available lockfile
RUN set -eux; \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@9.0.0 --activate; \
    pnpm install --frozen-lockfile; \
  elif [ -f yarn.lock ]; then \
    corepack enable; \
    yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then \
    npm ci; \
  else \
    npm install; \
  fi

############################################
# 2) Build
############################################
FROM node:20-alpine AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN set -eux; \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@9.0.0 --activate; \
    pnpm run build; \
  elif [ -f yarn.lock ]; then \
    corepack enable; \
    yarn build; \
  else \
    npm run build; \
  fi

############################################
# 3) Runtime
############################################
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

COPY --from=build /app/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
