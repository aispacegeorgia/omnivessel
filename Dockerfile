# Multi-stage Dockerfile for static Next.js export (Node 20 + Nginx)

FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
# Copy static export to Nginx html directory
COPY --from=build /app/out /usr/share/nginx/html
# Provide a minimal Nginx config with sensible security headers and caching
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
