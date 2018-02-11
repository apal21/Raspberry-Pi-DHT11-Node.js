const sensorLib = require("node-dht-sensor")

// Initialize DHT11 sensor
/*
 * Here inside the initialize function, first argument is the sensor
 * For example for DHT11 sensor it is 11 and for DHT22 it is 22.
 * Second argument is the GPIO pin. Here We're using GPIO4 (pin #7)
*/
sensorLib.initialize(11, 4)

setInterval(() => {
    let temperature = sensorLib.read().temperature.toFixed(1) + "°C"
    let humidity = sensorLib.read().humidity.toFixed(1) + "%"

    console.log('Temperature', temperature)
    console.log('Humidity', humidity)
}, 5000)
