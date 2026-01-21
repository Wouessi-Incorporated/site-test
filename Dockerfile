FROM nginx:alpine

# Copy site files to nginx default directory
COPY . /usr/share/nginx/html/

# Copy nginx config for SPA support
RUN echo 'server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    # Try to serve the file, or fall back to index.html for SPA routing
    location / {
        try_files  / /index.html;
    }

    # Cache assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
