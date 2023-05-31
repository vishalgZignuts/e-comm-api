const express = require('express');
const { createUser, loginUserCtrl, getAllUser, getUser } = require('../controllers/userCtrl');
const router = express.Router();


router.post('/register', createUser);
router.post('/login', loginUserCtrl);
router.get('/all-users', getAllUser);
router.get('/:id', getUser);



module.exports = router;