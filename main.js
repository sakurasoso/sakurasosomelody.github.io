"use strict";
var ply_buttons = document.getElementsByClassName("sound_button");

var sound1  = document.getElementById("sound_1");
var sound2  = document.getElementById("sound_2");
var sound3  = document.getElementById("sound_3");
var sound4  = document.getElementById("sound_4");
var sound5  = document.getElementById("sound_5");
var sound6  = document.getElementById("sound_6");

ply_buttons[0].onclick = function(){ply_sd(sound1)};
ply_buttons[1].onclick = function(){ply_sd(sound2)};
ply_buttons[2].onclick = function(){ply_sd(sound3)};
ply_buttons[3].onclick = function(){ply_sd(sound4)};
ply_buttons[4].onclick = function(){ply_sd(sound5)};
ply_buttons[5].onclick = function(){ply_sd(sound6)};

var whole_html = document.getElementsByTagName("html")[0];
var buttons = document.getElementsByClassName("buttons")[0];
var top_pos =  ((whole_html.offsetHeight - buttons.offsetHeight)/2) + "px";
console.log(typeof(top_pos));
buttons.style.top = top_pos;
document.getElementsByTagName("button").oncontextmenu = function(){
    event.returnValue = false;
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
            sound.play();
}