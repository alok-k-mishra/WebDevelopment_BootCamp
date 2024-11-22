// console.log("Hello Node");
// const fs = require("fs");

///writing file
// fs.writeFile("message.txt", "Hello Node", (err) => {
// });

///reading file
// fs.readFile("message.txt", "utf8", (err, data) => {
//     console.log(data);
// });


/// Using NPM
// var generateName = require('sillyname');
// import generateName from 'sillyname';
// import superheroes, { randomSuperhero } from "superheroes";

// var sillyName = generateName();
// var shName = randomSuperhero();


// console.log(`My name is ${sillyName}`);
// console.log(`My superhero name is ${shName}`);

///using inquirer and qr-image npm modules
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        {
            message: "Type your URL",
            name: "url",
        },
    ])
    .then((answers) => {
        const url = answers.url;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('qr_image.svg'));
    })

