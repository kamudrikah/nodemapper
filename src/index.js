require('dotenv').config();
const PDF2Pic = require('pdf2pic');
const path = require('path');

const express = require('express');
const app = express();

const dest = path.resolve('./storage/form.pdf');
const tempPath = path.resolve('./storage/');

const pdf2pic = new PDF2Pic({
    savename: 'temp',
    savedir: tempPath,
    format: "png",
    density: 200,
    size: "1240x1754",
});

pdf2pic.convertBulk(dest).then((resolve) => {
    console.log("image converter successfully!");
    return resolve;
});

// res.send("Process complete");
// app.get('/', function (req, res) {
// });
// app.listen(3000);

console.log('Node app is running..');