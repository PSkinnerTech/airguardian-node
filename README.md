# The AirGuardian Node: How to Build a Fully Decentralized Air Quality Monitoring Node

![Artboard 1](https://user-images.githubusercontent.com/78289253/229496685-36ed922f-9aa5-4d2e-b4dc-a63ef052c194.png)


Tutorial Article: https://blog.patrickskinner.tech/the-airguardian-node-how-to-build-a-fully-decentralized-air-quality-monitoring-node

## Introduction

Air pollution is a growing concern across the globe, affecting the health and well-being of millions of people. As urbanization continues to increase and industrial activities expand, monitoring air quality has become a crucial task for governments, businesses, and individuals alike. To address this challenge, we present the AirGuardian Node, a decentralized air quality monitoring solution that empowers communities to take control of their environment.

The AirGuardian Node is a compact, cost-effective, and easy-to-build device that combines the power of a Raspberry Pi 4 with the precision of the SDS011 air quality sensor. By leveraging the capabilities of the Streamr Network, the AirGuardian Node allows users to collect, store, and share real-time air quality data from various locations. This information can be utilized to identify pollution hotspots, evaluate the effectiveness of emission reduction strategies, and raise awareness about the importance of clean air.

Designed with sustainability in mind, the AirGuardian Node is powered by solar energy, making it an environmentally friendly and self-sufficient solution for air quality monitoring. Its weatherproof enclosure and durable components ensure reliable operation in various outdoor settings, from bustling city streets to remote rural areas.

In this tutorial, we will guide you through the process of building, programming, and deploying your very own AirGuardian Node. We will cover everything from assembling the hardware and setting up the Raspberry Pi to connecting the air quality sensor and configuring the Streamr client for data streaming. By the end of this tutorial, you will have a fully functional AirGuardian Node that you can use to monitor and contribute to the collective understanding of air quality in your community.

## Use Cases:

Here are several use cases for a decentralized air quality sensor using a Raspberry Pi 4 and an SDS011 sensor:

1. **Urban air quality monitoring**: Deploying multiple sensors across a city can help monitor air quality in real-time and provide valuable data for policymakers to implement strategies to improve air quality.
2. **Indoor air quality monitoring**: The device can be used to monitor air quality inside homes, offices, schools, and other buildings to ensure healthy living and working conditions.
3. **Industrial emission monitoring**: The device can be installed near industrial facilities to measure emissions from factories and plants, helping authorities enforce regulations and businesses to reduce their environmental impact.
4. **Traffic-related air pollution**: The sensors can be placed near busy roads, intersections, and highways to monitor the impact of vehicular emissions on air quality.
5. **Agricultural air quality monitoring**: Farmers can use the device to monitor air quality around their farms, detecting the presence of harmful chemicals or particles caused by pesticide use, fertilizers, or other agricultural processes.
6. **Construction site monitoring**: The sensor can be installed at construction sites to measure dust, particulate matter, and other pollutants released during construction activities, helping to ensure compliance with environmental regulations and protect workers' health.
7. **Forest fire and wildfire detection**: Deploying the devices in forested areas can help detect early signs of wildfires by monitoring changes in air quality, enabling rapid response to minimize damage.
8. **Air quality-based alert systems**: The device can be integrated into alert systems that notify users when air quality reaches unhealthy levels, advising people with respiratory issues or other sensitivities to stay indoors or take other precautions.
9. **Smart city applications**: The decentralized air quality sensors can be part of a larger smart city infrastructure that uses the data collected to optimize traffic flow, manage waste collection, and inform urban planning.
10. **Research and education**: The device can be used by researchers and students to study the effects of air pollution on health, the environment, and climate change, as well as develop innovative solutions to improve air quality.

## What you'll need:

To build the decentralized air quality sensor using a Raspberry Pi 4 and an SDS011 sensor, you will need the following items and tools:

### Items:

1. Raspberry Pi 4 (with 2GB, 4GB, or 8GB RAM, depending on your requirements)
2. 32 GB microSD card (Class 10 or higher recommended)
3. SDS011 air quality sensor
4. USB to UART adapter (compatible with the SDS011 sensor)
5. Raspberry Pi power supply (USB-C, 5V, 3A)
6. Solar panel (with sufficient wattage to power the Raspberry Pi 4)
7. Solar charge controller (compatible with the solar panel and battery)
8. Battery (for storing solar energy and powering the Raspberry Pi during low sunlight)
9. Voltage converter or power supply (to convert the battery voltage to 5V for the Raspberry Pi)
10. Weatherproof enclosure (to protect the Raspberry Pi and SDS011 sensor from the elements)
11. Mounting hardware (to secure the device in the desired location)
12. Jumper wires and connectors (to connect the components)

### Tools:

1. Computer (for programming and setting up the Raspberry Pi)
2. Raspberry Pi Imager (for installing the Raspberry Pi OS)
3. SSH client or terminal emulator (for remote access to the Raspberry Pi)
4. Soldering iron and solder (if required for making connections)
5. Wire strippers and cutters (for preparing jumper wires and connectors)
6. Screwdrivers (for assembling the enclosure and mounting hardware)
7. Multimeter (for testing connections and voltages)

### Optional Items:

1. Wi-Fi dongle (if the Raspberry Pi 4's built-in Wi-Fi is not sufficient)
2. USB keyboard and HDMI monitor (for local access to the Raspberry Pi if not using SSH)
3. Heat sink and cooling fan (to keep the Raspberry Pi 4 cool during operation)
4. Real-time clock module (to maintain accurate time when the Raspberry Pi is not connected to the internet)
5. External antenna (to improve Wi-Fi or cellular connectivity, if required)

## Tutorial

Here's a comprehensive tutorial on how to code, build, and deploy a decentralized air quality sensor using a Raspberry Pi 4, an SDS011 sensor, and a 32 GB microSD card that pushes data to the Streamr network.

### Step 1: Hardware Setup

1.1. Assemble the Raspberry Pi 4 with the microSD card. 1.2. Connect the SDS011 sensor to the Raspberry Pi using a USB to UART adapter.

### Step 2: Software Setup

2.1. Install Raspberry Pi OS on the microSD card using the Raspberry Pi Imager tool or any other preferred method.

2.2. Set up Wi-Fi and SSH access on the Raspberry Pi (if not done during OS installation).

2.3. Connect to the Raspberry Pi using SSH or open the terminal on the Raspberry Pi.

### Step 3: Install Required Libraries

3.1. Update the package list and upgrade the installed packages:

```bash
bashCopy codesudo apt update
sudo apt upgrade
```

#### 3.2. Install Node.js and npm:

```bash
bashCopy codecurl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt install -y nodejs
```

#### 3.3. Verify the installation:

```bash
bashCopy codenode -v
npm -v
```

### Step 4: Create the Project

#### 4.1. Create a new directory for the project and navigate into it:

```bash
bashCopy codemkdir air-quality-sensor
cd air-quality-sensor
```

#### 4.2. Initialize a new npm project:

```bash
bashCopy codenpm init -y
```

### Step 5: Install Dependencies

#### 5.1. Install the `streamr-client`, `sds011-wrapper`, and `dotenv` libraries:

```bash
bashCopy codenpm install streamr-client sds011-wrapper dotenv
```

### Step 6: Create the Application

#### 6.1. Create a new `.env` file to store your Streamr private key:

```bash
bashCopy codeecho "ETHEREUM_PrivateKey=YOUR_PRIVATE_KEY" > .env
```

Replace `YOUR_PRIVATE_KEY` with your actual private key.

#### 6.2. Create a new `index.js` file with the following content:

```bash
javascriptCopy codeconst StreamrClient = require('streamr-client');
const SDS011Wrapper = require('sds011-wrapper');
const fs = require('fs');

require('dotenv').config();

const client = new StreamrClient({
  auth: {
    privateKey: process.env.ETHEREUM_PrivateKey,
  },
});

const sensor = new SDS011Wrapper('/dev/ttyUSB0'); // Replace with the correct port for the SDS011 sensor on your Raspberry Pi

sensor.setReportingMode('query'); // Set the SDS011 sensor to query mode
sensor.setWorkingPeriod(1); // Set the working period to 1 minute (optional)

const publishAirQualityData = async (pm25, pm10) => {
  const data = {
    pm25: pm25,
    pm10: pm10,
  };

  console.log('Air Quality Data:', data);
  await client.publish('STREAM-ID', data); // Replace STREAM-ID with your Stream ID
};

sensor.on('measure', (pm25, pm10) => {
  publishAirQualityData(pm25, pm10);
});
```

Make sure to replace `/dev/ttyUSB0` with the correct port for the SDS011 sensor on your Raspberry Pi and `STREAM-ID` with your Stream ID.

### Step 7: Run the Application

#### 7.1. Run the `index.js` file:

```bash
bashCopy codenode index.js
```

The application will start collecting air quality data from the SDS011 sensor and publish it to the Streamr network.
