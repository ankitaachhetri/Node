console.log("Start");
await new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Timeout")
        resolve()
    },5000)
})
setTimeout(()=>{
    console.log("Timeout finished")
},2000)
// console.log("End");

setImmediate(()=>{
    console.log("Immediate finished")
})

process.nextTick(()=>{
    console.log("Next tick finished")
})
console.log("End");