
let cron;
let temp = 100;
let hor = 00;
let min = 00;
let sec = 00;
let tempo = document.querySelector(".tempo");

function start(x){
    if(x == 0){

        sec = 0;
        min = 0;
        hor = 0;
        const btn2 = document.querySelector(".btn2");
        btn2.innerHTML = "stop";
        btn2.setAttribute("status", "stoped");
    
        clearInterval(cron);
        cron = setInterval(() => {
            sec++;
            if(sec == 60){
                min++;
                sec = 00
                if(min == 60){
                    hor++;
                    min = 0;
                }
            };
           
            tempo.innerHTML = (hor <= 9 ? "0"+hor : hor)+":"+(min <= 9 ? "0"+min : min)+":"+(sec <= 9 ? "0"+sec : sec);
        },temp);}
   
    if(x == 1){
    
    clearInterval(cron);
    cron = setInterval(() => {
        sec++;
        if(sec == 60){
            min++;
            sec = 00
            if(min == 60){
                hor++;
                min = 0;
            }
        };
       
        tempo.innerHTML = (hor <= 9 ? "0"+hor : hor)+":"+(min <= 9 ? "0"+min : min)+":"+(sec <= 9 ? "0"+sec : sec);
    },temp);}
}

function Stop(){
    const btn2 = document.querySelector(".btn2");
    
    if(btn2.getAttribute("status") == "stoped"){
        clearInterval(cron)
        btn2.innerHTML = "Continue";
        btn2.removeAttribute("status");
        
    }else{
        start(1);
        btn2.innerHTML = "stop";
        btn2.setAttribute("status", "stoped");
    }
    
}
function Clear(){
 clearInterval(cron);
 sec = 00;
 min = 00;
 hor = 00;
 tempo.innerHTML = "00:00:00";
 const btn2 = document.querySelector(".btn2");
 btn2.innerHTML = "stop";
 btn2.setAttribute("status", "stoped");
 
 
}