const mqtt = require('mqtt');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Plant = require('./models/plant'); 
const randomCoordinates = require('random-coordinates');
const rand = require('random-int');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const app = express();
const port = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'));
app.use(express.static(`${__dirname}/public/generated-docs`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
    extended: true
}));

app.use((req, res, next) => 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
});

client.on('connect', () => 
{
    client.subscribe('/sensorData');
    console.log('mqtt connected');
});


client.on('message', (topic, message) => 
{
    console.log(`Received message on ${topic}: ${message}`);

    if (topic == '/sensorData') 
    {
        const data = JSON.parse(message);
        Plant.findOne({"name": data.plantId }, (err, plant) => 
        {
            if (err) 
            {
                console.log(err)
            }
            const { sensorData } = plant;
            const { ts, loc, temp } = data;
            sensorData.push({ ts, loc, temp });
            plant.sensorData = sensorData;

            plant.save(err => 
            {
                if (err) 
                {
                    console.log(err)
                }
            });
        });
    }
});

/**
* @api {get} /docs API Docs
* @apiGroup Docs
* @apiSuccessExample {object} Success-Response:
* '/generated-docs/index.html'
* @apiErrorExample {string} Error-Response:
* null
*/

app.get('/docs', (req, res) => 
{
    res.sendFile(`${__dirname}/public/generated-docs/index.html`);
});

/**
* @api {post} /mqtt/send-command 
* @apiGroup Plants
* @apiSuccessExample {string} Success-Response:
* 'published new message'
* @apiErrorExample {string} Error-Response:
* 'Syntax error'
*/

app.post('/send-command', (req, res) => 
{
    const { plantId, command } = req.body;
    const topic = `/myid/command/${plantId}`;
    client.publish(topic, command, () => 
    {
        res.send('published new message');
    });
});

/**
* @api {put} /mqtt/sensor-data New sensor data
* @apiGroup Plants
* @apiSuccessExample {json} Success-Response:
* {
* "plantId":"Bob's iPhone",
* "ts":1597018894324,
* "loc":{
* "lat":"64.11657",
* "lon":"-82.76068"
* },
* "temp":49
* }
* 'successfully added plant and data'
* @apiErrorExample {string} Error-Response:
* 'Cannot destructure property 'sensorData' of 'plant' as it is null'
*/

app.put('/sensor-data', (req, res) => 
{
    const { plantId } = req.body;
    const [lat, lon] = randomCoordinates().split(", ");
    const ts = new Date().getTime();
    const loc = { lat, lon };
    const temp = rand(20, 50);
    const topic = `/sensorData`;
    const message = JSON.stringify({ plantId, ts, loc, temp });
    client.publish(topic, message, () => 
    {
        res.send(`published new message to ${plantId}`);
    });
}); 
   
app.listen(port, () => 
{
    console.log(`listening on port ${port}`);
});
