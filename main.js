"use strict";
var ply_buttons = document.getElementsByClassName("sound_button");

var sound1  = document.getElementById("sound_1");
var sound2  = document.getElementById("sound_2");
var sound3  = document.getElementById("sound_3");
var sound4  = document.getElementById("sound_4");
var sound5  = document.getElementById("sound_5");
var sound6  = document.getElementById("sound_6");
var sound8  = document.getElementById("sound_8");

ply_buttons[0].onclick = function(){ply_sd(sound1);console.log("playing sound1")};
ply_buttons[1].onclick = function(){ply_sd(sound2);console.log("playing sound2")};
ply_buttons[2].onclick = function(){ply_sd(sound3);console.log("playing sound3")};
ply_buttons[3].onclick = function(){ply_sd(sound4);console.log("playing sound4")};
ply_buttons[4].onclick = function(){ply_sd(sound5);console.log("playing sound5")};
ply_buttons[5].onclick = function(){ply_sd(sound6);console.log("playing sound6")};
ply_buttons[6].onclick = function(){ply_sd(sound7);console.log("playing sound7")};
ply_buttons[7].onclick = function(){ply_sd(sound8);console.log("playing sound8")};

var whole_html = document.getElementsByTagName("html")[0];
var buttons = document.getElementsByClassName("buttons")[0];
var top_pos =  ((whole_html.offsetHeight - buttons.offsetHeight)/2) + "px";
console.log(typeof(top_pos));
buttons.style.top = top_pos;
document.getElementsByTagName("button").oncontextmenu = function(){
    event.returnValue = false;
}

whole_html.onresize = function(){
    var top_pos =  ((whole_html.offsetHeight - buttons.offsetHeight)/2) + "px";
    console.log("Changed");
    buttons.style.top = top_pos;
}
function ply(sound){
    sound.play();
    ply_button.textContent = " playing ";
}
function st(sound){
    sound.pause();
    sound.currentTime = 0;
    ply_button.textContent = " pause ";
}


function ply_sd(sound){
     sound.currentTime = 0;
     sound.cloneNode().play();
}
function ply_1(){
    sound1.play()
    sound1.currentTime = 0;
    sound2.play()
    sound2.currentTime = 0;
    sound1.play()
    sound1.currentTime = 0;
    sound3.play()
    sound3.currentTime = 0;
    sound4.play()
    sound4.currentTime = 0;
}