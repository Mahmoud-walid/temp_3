// Start Cursor

let circle = document.querySelector(".circle_shape");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    // console.log(x, y);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a, img, button, input, .main_title, textarea, video"));
console.log(links);
links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        circle.classList.add("circle_none");
    });
    link.addEventListener("mouseleave", () => {
        circle.classList.remove("circle_none");
    });
});

// End Cursor


// Start CountDown_Timer
// 1000 milliseconds = 1 second

let CountDown_Timer = new Date("Mar 31, 2023 23:59:59").getTime();
// console.log(CountDown_Timer);

let counter = setInterval(() => {
    // Mar 31, 2023 23:59:59
    // Get Date Now
    let DateNow = new Date().getTime();

    // Date between now and countDown Date
    let Date_Difference = CountDown_Timer - DateNow;

    // Get Time Units
    let daysUnit = Math.floor(Date_Difference / 1000 / 60 / 60 / 24);

    let hoursUnit = Math.floor((Date_Difference % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60);

    let minutesUnit = Math.floor(Date_Difference % (1000 * 60 * 60) / 1000 / 60);

    let secondsUnit = Math.floor(Date_Difference % (1000 * 60) / 1000);


    document.querySelector(".days_h2_count").innerHTML = daysUnit;
    document.querySelector(".hours_h2_count").innerHTML = hoursUnit;
    document.querySelector(".minutes_h2_count").innerHTML = minutesUnit < 10 ? `0${minutesUnit}` : minutesUnit;
    document.querySelector(".seconds_h2_count").innerHTML = secondsUnit < 10 ? `0${secondsUnit}` : secondsUnit;

    // if Counter ended
    
    if(Date_Difference <= 0) {
        clearInterval(counter);
        // let end = document.getElementsByClassName(".end_span").innerHTML = "End of event";
    }

}, 1000);


// End CountDown_Timer

// Start holder video

let main_video = document.querySelector('.main_video img');
let video_list = document.querySelectorAll('.videos_list .vid');
let title = document.querySelector('.main_video .title_main');

video_list.forEach(video => {
    video.onclick = () => {
        video_list.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src')
            main_video.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        }
    }
});
// End holder video

// Start Awesome States

let boxs = document.querySelectorAll(".boxs_states .box .count");
let section2 = document.querySelector(".top_videos");
let NotStarted = false;
// let section = document.querySelector(".awesome_state");

window.onscroll = function(){
    if(window.scrollY >= section2.offsetTop){
        if(!NotStarted){
            boxs.forEach((count) => startCount(count));
        }
        NotStarted = true;
    }
};


function startCount(el) {
    let prog = el.dataset.prog;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == prog) {
            clearInterval(count);
        }
    }, 10 / prog);
}

// startCount(boxs[0]);

// End Awesome States

