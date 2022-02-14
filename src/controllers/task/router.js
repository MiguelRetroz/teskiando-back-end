const express = require('express');

const { taskMiddlewares, userMiddlewares } = require('../../middlewares');

const router = express.Router({ mergeParams: true });

router.use(userMiddlewares.auth);

router.post(
  '/register',
  taskMiddlewares.create,
  require('./create'),
);

module.exports = router;
