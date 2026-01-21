from python:3.11-alpine

workdir /app

copy . .

expose 8000

cmd ["python", "-m", "http.server", "8000", "--directory", "/app"]
