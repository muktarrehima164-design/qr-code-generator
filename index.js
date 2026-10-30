//dependencies are package required for your application to run in production/runtime // libraries and frameworks like express, mongoose, axios 
// npm i express
// devDependencies are packages needed only during local development, tasting and building. //jest/test, webpack/build. //uses speeds up deployment time, reduces security vulnerabilirty
// npm i --save-dev jest

// npm script is custem command shortcuts defined inside the scripts vs npm run is CLI
// package-lock.json is transitive dependancy in node js project //what you actually got 
// what you want to use to package.json
// reproducible install npm i, npm test, npm run  build
// .env  hide the sensetive data keep out of the git 

// qr code generate for the input url



import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([
    {
        message:"enter your url?",
        name:"URL"
    },
])

.then((answers)=>{
    const url= answers.URL;
    var qr_img=qr.image(url);
    qr_img.pipe(fs.createWriteStream("qr-image.png"));
})
.catch((error)=>{
if(error.isTtyerror){
console.log("an error catched");
}else{
console.log("error");
}

});

