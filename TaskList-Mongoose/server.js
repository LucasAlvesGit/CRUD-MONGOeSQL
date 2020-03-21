const express = require('express'),
    app = express(),
    port = process.env.PORT || 8000;

app.listen(port);

console.log('Servidor funfando... http://localhost:' + port);