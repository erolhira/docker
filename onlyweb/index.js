const express = require('express');

//use the express library to create a new app
const app = express();

let count = 0;
app.get('/', (req, res) => {
    count ++;
    res.send('Count of visits: ' + count);
});

//start listening port 8080 
//and after the app starts listening to this port correctly we will print out a little message.
app.listen(8080, () => {
    console.log('Listening on port 8080');
});
