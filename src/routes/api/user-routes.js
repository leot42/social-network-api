const router = require('express').Router();

// Respond to a GET request to the /api/users route:
// router.get('/users', (req, res) => res.send('Got a GET request at /api/users'));
router.get('/', (req, res) => res.send('Got a GET request at /api/user'));

module.exports = router