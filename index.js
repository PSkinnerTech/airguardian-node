import StreamrClient from "streamr-client";

const StreamrClient = require("streamr-client");
const SDS011Wrapper = require("sds011-wrapper");
const fs = require("fs");

require("dotenv").config();

const client = new StreamrClient({
  auth: {
    privateKey: process.env.ETHEREUM_PRIVATE_KEY,
  },
});

const sensor = new SDS011Wrapper("/dev/ttyUSB0"); // Replace with the correct port for the SDS011 sensor on your Raspberry Pi

sensor.setReportingMode("query"); // Set the SDS011 sensor to query mode
sensor.setWorkingPeriod(1); // Set the working period to 1 minute (optional)

const publishAirQualityData = async (pm25, pm10) => {
  const data = {
    pm25: pm25,
    pm10: pm10,
  };

  console.log("Air Quality Data:", data);
  await client.publish("STREAM-ID", data); // Replace STREAM-ID with your Stream ID
};

sensor.on("measure", (pm25, pm10) => {
  publishAirQualityData(pm25, pm10);
});

import StreamrClient from "streamr-client";
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const streamr = new StreamrClient({
  auth: {
    privateKey: PRIVATE_KEY,
  },
});

const stream = await streamr.getOrCreateStream({
  id: process.env.STREAMR_PRIVATE_KEY / sensor / firehose,
});

await stream.grantPermissions({
  user: BrokerNodeAddress,
  permissions: [StreamPermission.PUBLISH, StreamPermission.SUBSCRIBE],
});

const mqttClient = mqtt.connect("mqtt://localhost:1883", {
  username: "x",
  password: process.env.MQTT_CLIENT_PASSWORD,
});

const StreamId = process.env.STREAM_ID / sensor / firehose;

await mqttClient.publish(StreamId, JSON.stringify({ data }));
