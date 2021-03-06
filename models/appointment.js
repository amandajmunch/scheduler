const db = require('../db/db');
const Appointment = {};

Appointment.findAll = () => db.query('SELECT * FROM appointments');

Appointment.findById = (id) => {
  return db.one(
    `SELECT * FROM appointments WHERE id = $1`,
    [id]
  );
}

// select from appointments where start_time like

Appointment.findByName = (name) => {
  return db.one(
    `SELECT * FROM appointments WHERE appointments.start_time = '$1'`, [name]
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
