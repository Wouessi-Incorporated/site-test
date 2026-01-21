from node:18-alpine

workdir /app

copy . .

run npm init -y && npm install express

expose 8000

cmd ["node", "-e", "const express = require('express'); const app = express(); app.use(express.static('.')); app.listen(8000, '0.0.0.0', () => console.log('Server running on 0.0.0.0:8000'));"]
