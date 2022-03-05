function updateClock(){
    let now=new Date();
    let dname=now.getDay();
    let mo=now.getMonth();
    let dnum=now.getDate();
    let yr=now.getFullYear();
    let hou=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    let pe="AM";

    if(hou>=12){
        pe="PM";
    }
    if(hou==0){
        hou=12;
    }
    if(hou>12){
        hou=hou-12;
    }

    // Number.prototype.add=function(digits){
    //     for(let n=this.toString();n.length<digits;n=0+n );
    //     return n;
    // }

    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let ids=["dayname","month","daynum","year","hour","minutes","seconds","period"]
    let values=[week[dname],months[mo],dnum,yr,hou,min,sec,pe];

    for (let i=0;i<ids.length;i++){
        document.getElementById(ids[i]).firstChild.nodeValue=values[i];
    }
    
    if(dnum<10){
        document.getElementById("daynum").innerHTML="0"+dnum;
    }
    if(hou<10){
        document.getElementById("hour").innerHTML="0"+hou;
    }
    if(min<10){
        document.getElementById("minutes").innerHTML="0"+min;
    }
    if(sec<10){
        document.getElementById("seconds").innerHTML="0"+sec;
    }
    
}

function initClock(){
    setInterval("updateClock()",1);
}