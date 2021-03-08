const Appointments = require('../models/appointment');

const controller = {};

controller.index = (req, res) => {
  Appointments
    .findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('ERROR: ', err));
}

controller.create = (req, res) => {
  console.log("Adding to db:", req.body);
  const start_time = req.body.start_time,
    end_time = req.body.end_time,
    price = req.body.price,
    status = req.body.status;

  Appointments
    .create(start_time, end_time, price, status)
    .then((data) => {
      res.json(data);
    })
    .catch(err => console.log('CONTROLLER ERROR: ', err));
}

controller.update = (req, res) => {
  const start_time = req.body.start_time,
    end_time = req.body.end_time,
    price = req.body.price,
    status = req.body.status,
    id = req.params.id;
  console.log(req.body);
  Appointments
    .update(id, start_time, end_time, price, status)
    .then(data => res.json(data))
    .catch(err => console.log('ERROR', err));

};


controller.delete = (req, res) => {
  const id = req.params.id;

  Appointments
    .delete(id)
    .then((data) => {
      res.send('Deleted from DB.');
    })
    .catch(err => console.log('ERROR: ', err));
}

controller.show = (req, res) => {
  const id = req.params.id;
  Appointments
    .findById(id)
    .then((data) => {
      res.send(data);
    })
    .catch(err => console.log('ERROR:', err));
};

//search DB from searchbar, input any search component
controller.showName = (req, res) => {
  let name = '%' + req.params.name + '%';
  Appointments
    .findByName(name)
    .then((data) => {
      res.send(data);
    })
    .catch(err => console.log('ERROR:', err));
};

// search DB betwen two times from sort component
controller.showTime = (req, res) => {
  const start_time = req.params.start_time,
    end_time = req.params.end_time;
  Appointments
    .findByTime(start_time, end_time)
    .then((data) => {
      res.send(data);
    })
    .catch(err => console.log('ERROR:', err));
};


module.exports = controller;
