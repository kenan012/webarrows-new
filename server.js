const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB error:', err));

const submitRoute = require('./routes/submit');
app.use('/submit', submitRoute);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ WebArrows backend is running!');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
