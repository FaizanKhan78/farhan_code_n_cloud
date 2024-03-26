const express = require("express");
const router = express.Router();
const authController = require("../controller/auth-controller");
const upload = require('../middleware/file-middleware');

// Home route
router.get('/', authController.home);

// Registration route
router.route('/registration')
  .post(upload.single('file'), authController.registration);

// Login route
router.route('/login')
  .post(authController.login);

// Delete route
router.route('/delete/:id/:file')
  .delete(authController.Delete);

// Edit route
router.route('/edit')
  .patch(authController.edit);

module.exports = router;
