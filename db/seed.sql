CREATE DATABASE nielsen;

DROP TABLE IF EXISTS nielsen CASCADE;

CREATE TABLE appointments(
  id SERIAL PRIMARY KEY NOT NULL,
  -- date_created TIMESTAMP NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  -- car_model VARCHAR(255) NOT NULL,
  -- client_name VARCHAR(255) NOT NULL,
  -- client_contact VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  status VARCHAR(255) NOT NULL
);

