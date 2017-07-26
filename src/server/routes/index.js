const express = require('express');
const candidates = require("../../../data.json");
const router = express.Router();

router.get('/candidates', (req, res) => {
  res.status(200).json(candidates);
})

module.exports = router;