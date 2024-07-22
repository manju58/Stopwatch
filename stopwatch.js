document.getElementById("time")=`00 hrs : 00 mins : 00 secs`
function sw(){
    let hrs = 0;
    let mins = 0;
    let secs = 0;

    secs++;
    if(secs == 60){
        mins++;
        secs = 0;
        if(mins == 60){
            hrs++;
            mins = 0;
        }
    }
}
document.getElementById("time")=`${hrs} : ${mins} : ${secs}`
document.getElementById("Start")

start.addEventListener(() => {
    watch = setInterval(sw(),1000)
})
pause.addEventListener(() =>{
    clearInterval(watch)
})