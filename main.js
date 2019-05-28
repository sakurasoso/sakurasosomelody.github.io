"use strict";
var ply_buttons = document.getElementsByClassName("sound_button");

var sound1  = document.getElementById("sound_1");
var sound2  = document.getElementById("sound_2");
var sound3  = document.getElementById("sound_3");
var sound4  = document.getElementById("sound_4");
var sound5  = document.getElementById("sound_5");
var sound6  = document.getElementById("sound_6");
var sound7  = document.getElementById("sound_7");
var sound8  = document.getElementById("sound_8");

ply_buttons[0].onclick = function(){ply_sd(sound1);};
ply_buttons[1].onclick = function(){ply_sd(sound2);};
ply_buttons[2].onclick = function(){ply_sd(sound3);};
ply_buttons[3].onclick = function(){ply_sd(sound4);};
ply_buttons[4].onclick = function(){ply_sd(sound5);};
ply_buttons[5].onclick = function(){ply_sd(sound6);};
ply_buttons[6].onclick = function(){ply_sd(sound7);};
ply_buttons[7].onclick = function(){ply_sd(sound8);};

var whole_html = document.getElementsByTagName("html")[0];
var buttons = document.getElementsByClassName("buttons")[0];
var top_pos =  ((whole_html.offsetHeight - buttons.offsetHeight)/2) + "px";
buttons.style.top = top_pos;
document.getElementsByTagName("button").oncontextmenu = function(){
    event.returnValue = true;
}

whole_html.onresize = function(){
    var top_pos =  ((whole_html.offsetHeight - buttons.offsetHeight)/2) + "px";
    console.log(top_pos);
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



var colors = new Array(
    [62,35,255],
    [60,255,60],
    [255,35,98],
    [45,175,230],
    [255,0,255],
    [255,128,0]);
  
  var step = 0;
  //color table indices for: 
  // current color left
  // next color left
  // current color right
  // next color right
  var colorIndices = [0,1,2,3];
  
  //transition speed
  var gradientSpeed = 0.002;
  
  function updateGradient()
  {
    
    if ( $===undefined ) return;
    
  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];
  
  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb("+r1+","+g1+","+b1+")";
  
  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb("+r2+","+g2+","+b2+")";
  
   $('#gradient').css({
     background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
      background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    
    step += gradientSpeed;
    if ( step >= 1 )
    {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];
      
      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
      
    }
  }
  
  setInterval(updateGradient,10);