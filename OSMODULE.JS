const os = require('os');
console.log("Platform:", os.platform());
console.log("CPU:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Architecture:", os.arch());