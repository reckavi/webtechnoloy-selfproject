function showtime(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let greetings;
    let session="AM";
    console.log(hours);
    if(hours>6 && hours<12){
        greetings="Good Morning Folks";
    }
    else if(hours>=12 && hours<19){
        greetings="Good Evening Folks";
    }
    else{
        greetings="Good Night Guys";
    }

    if (hours>12){
        hours=hours-12;
        session="PM";
    }

    hours=(hours<10)?"0"+hours:hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;
    let time=hours+":"+minutes+":"+seconds+" "+session;
    document.querySelector("#time").innerHTML=time;
    document.querySelector("#greetings").innerHTML=greetings;


}
showtime();
setInterval(showtime, 1000);