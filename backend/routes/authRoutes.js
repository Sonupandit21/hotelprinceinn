const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  const { email, password } = req.body;
  // Your authentication logic here
  res.json({ message: 'Signin successful' });
});

// Add GET route for /signin (optional)
router.get('/signin', (req, res) => {
  res.send('GET /signin route is working!');
});

module.exports = router;
