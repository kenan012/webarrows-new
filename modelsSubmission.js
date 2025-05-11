const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  name: String,
  phone: String,
  country: String,
  service: String,
  answers: [String],
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', submissionSchema);
