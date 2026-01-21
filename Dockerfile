from node:18-alpine

workdir /app

copy . .

run npm install -g http-server

expose 8000

cmd ["http-server", ".", "-p", "8000", "--cors"]
