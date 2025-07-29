function fn1(){
    return 'hello'
}
console.log(fn1());
//async function always returns promise
async function fn(){
    return 'hello'
}
console.log(fn());
fn().then((msg)=> console.log(msg))

//how to return promise without using then
//below is normal promise
let reachA=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
        setTimeout(resolve,3000,"Vidhya reached")
    else
        reject("Vidhya is not reached")
})
//how to use the above using async
async function asyncstatus(){
    console.log('hi...')
    res=await reachA
    console.log(res)
    console.log('bye')
}
asyncstatus()

//await only used inside the async fn, it returns until wait for fulfil, when reject scenerio we use try, catch

let reachB=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"Ramya reached")
    else
        reject("Ramya is not reached")
})

async function asynccstatus(){
    try{
    console.log('hi...')
    res=await reachB
    console.log(res)
    console.log('bye')}
    catch(err){
        console.log(err)
    }
}
asynccstatus()
//JSON- Javascript Object Notation -used for Data Transmission

let json1="Dave"
let json2=4
let json3= true
let json4= [4,5,6,7]
let json5= {
    "Stock" : "TCS",
    "Price" : 3500 // we use double quotes also for keys
}
let json6=[
    {
        "Stock" : "TCS",
        "Price" : 3500 
    },
    {
        "Stock" : "TCS",
        "Price" : 3500 
    },
    {
        "Stock" : "TCS",
        "Price" : 3500 
    },
    {
        "Stock" : "TCS",
        "Price" : 3500 
    }

]
console.log(json6) //it print just in the form json object

let json7=`[
    {
        "Stock" : "TCS",
        "Price" : 3500 
    },
    {
        "Stock" : "TCS",
        "Price" : 3500 
    },
    {
        "Stock" : "TCS",
        "Price" : 3500 
    },
    {
        "Stock" : "TCS",
        "Price" : 3500 
    }

]`
console.log(json7)//it return the string format because we use backtick(this is just one of example, but most of the API return in the form of String)
//so how to access the string which is return by API

let parsed= JSON.parse(json7)
console.log(parsed)//it return json format of string which is return by API
//so how to access it, we know that already, just like normal object accessing

console.log(parsed[1].Price)// it return the answer

//so how we change the json into string, already we saw how to change string into json
//now we will see how to change json into string
console.log(JSON.stringify(json6))//it return the string from json object
