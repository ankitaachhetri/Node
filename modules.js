const path=require('path');
const currentPath=path.join(__dirname,);
console.log("currentPath",currentPath);

const fs=require("fs");
console.info("Reading file from ${currentPath};");
const data=fs.readFileSync(path.join(currentPath,"triangle.js"),"utf-8");
console.log(data);
console.log("*".repeat(50));
fs.writeFileSync(path.join(currentPath,"./op.txt"),"update from code");

//os modules
const os=require("os");
console.log( os.freemem());
console.log( os.platform());
console.log(os.userInfo());
console.log(os.homedir());

