const db = require('../db/db');
const Appointment = {};

//get all db entries sorted by date ascending
Appointment.findAll = () => db.query('SELECT * FROM appointments ORDER BY start_time ASC');

Appointment.findById = (id) => {
  return db.one(
    `SELECT * FROM appointments WHERE id = $1`,
    [id]
  );
}

// select all entries from appointments where input value like each column
Appointment.findByName = (search) => {
  return db.many(
    'SELECT * FROM appointments WHERE start_time::text LIKE $1 OR end_time::text LIKE $1 OR price::text LIKE $1 or status::text LIKE $1', [search]
  );
}

//search DB for all appointments between two times
Appointment.findByTime = (start, end) => {
  return db.many(
    'SELECT * FROM appointments WHERE start_time BETWEEN $1 AND $2', [start, end]
  );
}


Appointment.create = (start_time, end_time, price, status) => {
  return db.one(
    `INSERT INTO appointments (start_time, end_time, price, status) VALUES ($1, $2, $3, $4) returning id`,
    [start_time,end_time, price, status]
  );
}

Appointment.update = (id, start_time, end_time, price, status) => {
  return db.one(
    'UPDATE appointments SET start_time = $1, end_time = $2, price = $3, status = $4 WHERE id = $5 returning id',
    [start_time, end_time, price, status, id]
  );
}

Appointment.delete = (id) => {
  return db.none(
    `DELETE FROM appointments WHERE id = $1`,
    [id]
  );
}

module.exports = Appointment;
