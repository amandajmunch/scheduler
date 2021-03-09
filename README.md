### Appointment Scheduler

## How to run

Install Docker and postgresql if not currently on machine. 
CD into app folder and run npm install. 

# Seed DB

Run 'docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine';
Remember the container name and run the below command.

'cat ./db/seed.sql | docker exec -i ${CONTAINER NAME} psql -U postgres -d nielsen'; 

psql -h localhost -p ${LOCALHOST} -U postgres to view table 
)


cat ./db/seed.sql | docker exec -i  5d7046ba311d31347c651156d399cadad2c4edcec4ed2cc0054d8251b22fe338 psql -U postgres -d nielsen
