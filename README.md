Install Docker if not on machine
install psql


run docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine
remember container name
cat ./db/seed.sql | docker exec -i ${CONTAINER NAME} psql -U postgres -d nielsen

psql -h localhost -p ${LOCALHOST} -U postgres to view table 
)


cat ./db/seed.sql | docker exec -i  5d7046ba311d31347c651156d399cadad2c4edcec4ed2cc0054d8251b22fe338 psql -U postgres -d nielsen
