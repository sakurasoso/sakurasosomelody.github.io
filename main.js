"use strict";
var ply_button = document.getElementById("sound-1-bt");

var sound1  = document.getElementById("sound_1");
var playPromise = sound1.play();

ply_button.onclick = function(){cont()};
/*
document.oncontextmenu = function(){
    event.returnValue = false;
}*/
document.getElementsByTagName("button").oncontextmenu = function(){
    event.returnValue = false;
}
function ply(){
    sound1.play();
    ply_button.textContent = " playing ";
}
function st(){
    sound1.pause();
    sound1.currentTime = 0;
    ply_button.textContent = " pause ";
}


function cont(){
    /*
    if(ply_button.textContent == " pause "){
        ply();
    }
    else{
        st();
    }*/
    if (playPromise !== undefined) {
        playPromise.then(_ => {
          sound1.pause();
        })
        .catch(error => {
            sound1.play();
        });
      }
}