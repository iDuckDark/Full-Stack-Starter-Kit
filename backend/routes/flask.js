const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('Flask', { title: 'Flask Title Page' });
});

router.get('/predict-sales', (req, res, next) => {
  
  res.render('Flask', { title: 'Flask Title Page' });
});

module.exports = router;
