const express = require('express');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        res.send('<h1>HELLO DESDE</h1>' + '<h1>req.baseUrl</h1>');
    });

    module.exports = router;