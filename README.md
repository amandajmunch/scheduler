# Appointment Scheduler

## How to run

Install Docker and postgresql if not currently on machine. 
CD into app folder and run npm install. 

### Seed DB

Run `docker run --name postgres-0 -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:alpine`
Remember the container name and run the below command: 

`cat ./db/seed.sql | docker exec -i ${CONTAINER NAME} psql -U postgres -d nielsen` 

### Start App
In one tab, run `npm start` to begin server and `npm run watch` to start front end. 

Search for date such as `03-15` or status (case sensitive). Filter between date and times. App adds new appointments every 5 to 10 minutes. 

Add new appointments and view/edit current. Double click on appointment status to modify. 
