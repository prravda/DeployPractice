const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('node server deploy');
})

app.listen(5000, ()=> {
    console.log('server on 5000');
});