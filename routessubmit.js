const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');

router.post('/', async (req, res) => {
  try {
    const submission = new Submission(req.body);
    await submission.save();
    res.status(200).json({ message: 'Submission received!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
