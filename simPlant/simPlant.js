const { URL, UNAME, PASSWORD } = process.env;

const mqtt = require('mqtt');
const express = require('express');
const readline = require('readline');
const Math = require('mathjs');

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

var plantData = {"id": 0, "data":{"temp":0, "light":0, "hum":0, "smoist":0}};

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

var plantID;
rl.question(">>What is the Plant ID?  ", function(answer) {
   plantID = answer;
   plantData.id = plantID;
   rl.close();
   connectMQTT();
   setInterval(sendData, 2000)
});



function sendData() {
	const topic = `/IPLANT/${plantID}/`;
	plantData.data.temp = randomSensorValue();
	plantData.data.light = randomSensorValue();
	plantData.data.hum = randomSensorValue();
	plantData.data.smoist = randomSensorValue();
	console.log("Sending to topic: " + topic);
	console.log("Data: " + JSON.stringify(plantData));
	client.publish(topic, JSON.stringify(plantData), () => {
		console.log('published new message topic');
	});
}

function connectMQTT(){
	client.on('connect', () => {
	    console.log('mqtt connected');
	});
}

function randomSensorValue(){
	return Math.floor(Math.random()*101);
}
