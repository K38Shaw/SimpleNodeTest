const express = require('express')

const app = express()

app.get('/', (request, response) => {
     response.send('It worked!')
})
currentMessage = [];

//Commented out code reflects my some of my original thoughts, when I thought I'd be snarky,
// but I reread the assignment and you had plans for the routes I initially thought I wouldn't need.
//I'll comment out the snarky/easter egg code. But it must be preserved for future comedic references.

var osutils = require('os-utils');

app.get('/', (request, response) => {
  response.send('Thank you for using our messaging system. Please go to route /sendMessage/ to get started.')   
})

app.get('/sendMessage', (request, response) => {
    currentMessage = [];
    // response.send('To send a message, go to the URL, and add a "/" + your message,after the route name.')
    response.send(currentMessage)
})

app.get('/sendMessage/:message', (request, response) => {
     const { message } = request.params;
     currentMessage.push(message);
    //response.send(`Hello, we will send: ${currentMessage}, to your recipient. Thank you for using our messaging system.`)
    response.send(currentMessage)
})

app.get('/stats', (request, response) => {
    console.log("Platform: " + osutils.platform());
    console.log("number of CPUs: " + osutils.cpuCount());
    osutils.cpuUsage(function(v) {
        console.log("CPU usage: " + v);
    })
    
    console.log("Load Average (5ms):" + osutils.loadavg(5));
    console.log("Total Memory: " + osutils.totalmem() + "MB");
    console.log("Free Memory: " + osutils.freemem() + "MB");
    console.log("Free Memory (%):" + osutils.freememPercentage() + "%");
    console.log("System Uptime: " + osutils.sysUptime() + " seconds");
    
var dictionary = {
    "platform": osutils.platform(),
    "number of CPUs": osutils.cpuCount(),
    "CPU usage": osutils.cpuUsage(),
    "Load Average (5ms)": osutils.loadavg(5),
    "Total Memory": osutils.totalmem() + "MB",
    "Free Memory": osutils.freemem() + "MB",
    "Free Memory (%)": osutils.freememPercentage() + "%",
    "System Uptime": osutils.sysUptime() + " seconds"
}

     response.send(dictionary)
})

app.listen(4000, () => {
    console.log(`Server is Listening on 4000`)
})