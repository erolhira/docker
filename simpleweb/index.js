const express = require('express');
const redis = require('redis');

setTimeout(() => {}, 1);

//use the express library to create a new app
const app = express();
const redisClient = redis.createClient({
    //host: 'https://my-redis-server.com' //without docker
    //host: 'https://[service-name-in-docker-compose-file]' //with docker
    host: 'redis',
    port: 6379
});
redisClient.set('visits', 0);

app.get('/', (req, res) => {
    redisClient.get('visits', (err, visits) => {
        res.send('Number of visits: ' + visits);
        redisClient.set('visits', parseInt(visits) + 1);
    });
    //res.send('Hi there');
});

//start listening port 8080 
//and after the app starts listening to this port correctly we will print out a little message.
app.listen(8080, () => {
    console.log('Listening on port 8080');
});
