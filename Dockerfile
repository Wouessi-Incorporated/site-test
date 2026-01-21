from node:18-alpine

workdir /app

copy . .

run npm install -g http-server

expose 8000

healthcheck --interval=30s --timeout=5s --start-period=10s --retries=3 cmd node -e "require('http').get('http://localhost:8000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

cmd ["http-server", ".", "-p", "8000", "-a", "0.0.0.0", "--cors"]
