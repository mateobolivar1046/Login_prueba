# Etapa 1: Construir la app
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html



# Exponer puerto (Cloud Run usa 8080)
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
