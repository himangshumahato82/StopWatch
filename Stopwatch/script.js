// let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
// let timerRef = document.querySelector('.timerDisplay');
// let int = null;

// document.getElementById('startTimer').addEventListener('click', ()=>{
//     if(int!==null){
//         clearInterval(int);
//         console.log(int)
//     }
//     int = setInterval(displayTimer,10);
// });

// document.getElementById('pauseTimer').addEventListener('click', ()=>{
//     clearInterval(int);
// });

// document.getElementById('resetTimer').addEventListener('click', ()=>{
//     clearInterval(int);
//     [milliseconds,seconds,minutes,hours] = [0,0,0,0];
//     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
// });

// function displayTimer(){
//     milliseconds+=10;
//      console.log(milliseconds)
//     if(milliseconds == 1000){
//         milliseconds = 0;
//         seconds++;
//         if(seconds == 60){
//             seconds = 0;
//             minutes++;
//             if(minutes == 60){
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }
//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

//     timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
// }

// const timerRef=document.querySelector(".timerDisplay")

// let [milisec, sec, min, hr] = [0, 0, 0, 0];
// let init=0
// document.getElementById("startTimer").addEventListener("click",()=>{
//     // if(init!==null){
//     //     clearInterval(init)
//     // }
//    init= setInterval(StopWatch,10);
// })
// document.getElementById("pauseTimer").addEventListener("click",()=>{
//     clearInterval(init);
// })
// document.getElementById("resetTimer").addEventListener("click",()=>{
//      clearInterval(init);
//       [milisec, sec, min, hr] = [0, 0, 0, 0];
//     timerRef.innerHTML = '00 : 00 : 00 : 000 ';
// })

// function StopWatch(){
//    milisec+=10;
//    if(milisec==1000){
//     milisec=0;
//     sec++;
//    if(sec==60){
//     sec=0;
//     min++;
//    if(min==60){
//     min=0;
//     hr++;
//       }
//     }
//    }

// let h=hr<10?"0"+ hr:hr
// let m=min<10?"0"+ min:min
// let s=sec<10?"0"+ sec:sec
// let ms=milisec < 10 ? "00" + milisec : milisec < 100 ? "0" + milisec : milisec;
// timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`
// }

    // const timerRef = document.querySelector(".timerDisplay");
  
    // let [milisec, sec, min, hr] = [0, 0, 0, 0];
    // let init = 0;
  
    // document.getElementById("startTimer").addEventListener("click", () => {
    //   init = setInterval(StopWatch, 10);
    // });
  
    // document.getElementById("pauseTimer").addEventListener("click", () => {
    //   clearInterval(init);
    // });
  
    // document.getElementById("resetTimer").addEventListener("click", () => {
    //   clearInterval(init);
    //   [milisec, sec, min, hr] = [0, 0, 0, 0];
    //   timerRef.innerHTML = '00 : 00 : 00 : 000 ';
    // });
  
    // function StopWatch() {
    //   milisec += 10;
    //   if (milisec == 1000) {
    //     milisec = 0;
    //     sec++;
    //     if (sec == 60) {
    //       sec = 0;
    //       min++;
    //       if (min == 60) {
    //         min = 0;
    //         hr++;
    //       }
    //     }
    //   }
  
    //   let h = hr < 10 ? "0" + hr : hr;
    //   let m = min < 10 ? "0" + min : min;
    //   let s = sec < 10 ? "0" + sec : sec;
    //   let ms =
    //     milisec < 10
    //       ? "00" + milisec
    //       : milisec < 100
    //       ? "0" + milisec
    //       : milisec;
    //   timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
    // }
  
  