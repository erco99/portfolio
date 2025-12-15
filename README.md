# PORTFOLIO

## Build and run

### Containerized deployment

Build the Docker image
```sh
docker build -t portfolio .
```
and get the website up and running on `localhost:3000` with
```sh
docker run --rm -p 3000:3000 portfolio
```
Alternatively, this can be done in one stop using docker compose:
```bash
docker-compose up --build
```
