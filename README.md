Install Docker if not on machine
install psql


run docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine
remember container name
cat ./db/seed.sql | docker exec -i ${CONTAINER NAME} psql -U postgres -d nielsen

psql -h localhost -p ${LOCALHOST} -U postgres to view table 
)

