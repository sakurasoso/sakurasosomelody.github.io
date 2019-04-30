"use strict";
var ply_buttons = document.getElementsByClassName("sound_button");

var sound1  = document.getElementById("sound_1");
var sound2  = document.getElementById("sound_2");
var sound3  = document.getElementById("sound_3");
var sound4  = document.getElementById("sound_4");
var sound5  = document.getElementById("sound_5");
var sound6  = document.getElementById("sound_6");

ply_buttons[0].onclick = function(){cont(sound1)};
ply_buttons[1].onclick = function(){cont(sound2)};
ply_buttons[2].onclick = function(){cont(sound3)};
ply_buttons[3].onclick = function(){cont(sound4)};
ply_buttons[4].onclick = function(){cont(sound5)};
ply_buttons[5].onclick = function(){cont(sound6)};
/*
document.oncontextmenu = function(){
    event.returnValue = false;
}*/
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


function cont(sound){
    /*
    var playPromise = sound.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          sound.pause();
        })
        .catch(error => {
            console.log("worked")
            sound.currentTime = 0;
            sound.play();
        });
      }
      */
     sound.currentTime = 0;
            sound.play();
}