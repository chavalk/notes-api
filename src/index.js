const express = require('express');

const app = express();

app.get('/notes', (req, res) => {

})

app.listen(3000, () => {
    console.log("Server is up on port 3000")
})