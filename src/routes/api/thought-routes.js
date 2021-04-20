const router = require('express').Router();

// Respond to a GET request to the /api/thoughts route:
router.get('/', (req, res) => res.send('Got a GET request at /api/thoughts'));

module.exports = router;