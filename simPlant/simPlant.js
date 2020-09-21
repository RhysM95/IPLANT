const { URL, UNAME, PASSWORD } = process.env;

const mqtt = require('mqtt');
const express = require('express');
const readline = require('readline');
const Math = require('mathjs');

const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

var plantData = {id: 0, data:{temp:0, light:0, hum:0, smoist:0, dateTime:0}};

//how to stringify date and time 
/*
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
*/

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
   setInterval(sendData, 5000)
});

function sendData() {
	const topic = `/IPLANT/${plantID}/`;

	plantData.data.time = Date.now();
	plantData.data.temp = randomSensorValue(-40, 80);
	plantData.data.light = randomSensorValue(0, 20000);
	plantData.data.hum = randomSensorValue(0, 100);
	plantData.data.smoist = randomSensorValue(0, 950);
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

function randomSensorValue(low, hi){
	return Math.floor(Math.random(low, hi));
}
