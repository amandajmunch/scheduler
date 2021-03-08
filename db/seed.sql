CREATE DATABASE nielsen;

DROP TABLE IF EXISTS appointments CASCADE;


SET TIME ZONE 'EST';
SHOW timezone;

CREATE TABLE appointments(
  id SERIAL PRIMARY KEY NOT NULL,
  start_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'EST'),
  end_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (current_timestamp AT TIME ZONE 'EST'),
  price INT NOT NULL,
  status VARCHAR(255) NOT NULL
);

INSERT INTO appointments(start_time, end_time, price, status) VALUES
('2021-01-25 09:30:00', '2020-01-25 11:30:00', 475, 'Completed'),
('2021-02-28 12:00:00', '2020-02-28 12:30:00', 220, 'Pending'),
('2021-03-05 14:15:00', '2020-03-05 15:15:00', 150, 'Pending'),
('2021-03-15 15:00:00', '2020-03-15 16:00:00', 150, 'Pending');
