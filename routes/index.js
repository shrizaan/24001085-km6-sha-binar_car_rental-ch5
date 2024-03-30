const express = require('express');

const router = express.Router();
const carRoutes = require('./car');
const carTypeRoutes = require('./car-type');
const carBrandRoutes = require('./car-brand');

router.use('/cars', carRoutes);
router.use('/car-types', carTypeRoutes);
router.use('/car-brands', carBrandRoutes);

module.exports = router;
