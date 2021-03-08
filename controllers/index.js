const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);
router.get('/', controller.index);
router.get('/search/:name', controller.showName);
router.get('/search/times/:start_time&:end_time', controller.showTime);
router.get('/:id', controller.show);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
