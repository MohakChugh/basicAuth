const express = require('express');
const router = express.Router();
const auth = require('../authentication/controllers/authControllers')
const controllers = require('../controllers/controller')

router.post('/v1/auth/signup', auth.register);
router.post('/v1/auth/login', auth.login);
router.get('/v1/users/profile,', controllers.getProfileDetails);
router.patch('/v1/users/profile', controllers.updateUser);

module.exports = router;
