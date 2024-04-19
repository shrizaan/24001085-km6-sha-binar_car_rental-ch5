const express = require('express');

const router = express.Router();
const carRoutes = require('./car');
const carTypeRoutes = require('./car-type');
const carBrandRoutes = require('./car-brand');
const userAdmin = require('./user-super-admin');
const userMember = require('./user-member');
const { authorizeMemberMw } = require('../middleware');

router.use('/cars', carRoutes);
router.use('/car-types', carTypeRoutes);
router.use('/car-brands', carBrandRoutes);
router.use('/admins', userAdmin);
router.use('/members', userMember);
router.get('/current-user', authorizeMemberMw, (req, res) => {
  const { password, ...userWithoutPassword } = req.user;
  res.json({
    status: 'success',
    data: userWithoutPassword,
  });
});

module.exports = router;
