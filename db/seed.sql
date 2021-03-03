CREATE DATABASE nielsen;

DROP TABLE IF EXISTS appointments CASCADE;

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

INSERT INTO appointments(start_time, end_time, price, status) VALUES
('2020-JAN-25 09:30:00', '2020-JAN-25 11:30:00', 475, 'Completed'),
('2020-FEB-28 12:00:00', '2020-FEB-28 12:30:00', 220, 'Pending'),
('2020-MAR-05 14:15:00', '2020-MAR-05 15:15:00', 150, 'Pending'),
('2020-MAR-15 15:00:00', '2020-MAR-15 16:00:00', 150, 'Pending');
