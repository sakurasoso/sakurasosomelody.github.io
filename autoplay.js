"use strict";
//quickchecklist
//1 - C
//2 - D
//3 - E
//4 - F
//5 - G
//6 - A
//7 - B
//8 - C
var songscript_1 ="012345678";
var songscript_2 ="333033303512300444404333032232050"+"3330333035123000444433355431000"//jingle bell


var auto_play = function(songlist){
    var note = "";
    for(var i=0;i<songlist.length;i++){
        (function(note){
        note = songlist[i];
        //console.log("note "+note);
        setTimeout( ()=>play(note) ,i*450);
        })(note)
    }
}

var play = function(note){
    var intv = 300;
    if( note === "1"){
        ply_buttons[0].onclick();
        ply_buttons[0].classList.add("show");
        setTimeout( ()=>ply_buttons[0].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "2"){
        ply_buttons[1].onclick();
        ply_buttons[1].classList.add("show");
        setTimeout( ()=>ply_buttons[1].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "3"){
        ply_buttons[2].onclick();
        ply_buttons[2].classList.add("show");
        setTimeout( ()=>ply_buttons[2].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "4"){
        ply_buttons[3].onclick();
        ply_buttons[3].classList.add("show");
        setTimeout( ()=>ply_buttons[3].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "5"){
        ply_buttons[4].onclick();
        ply_buttons[4].classList.add("show");
        setTimeout( ()=>ply_buttons[4].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "6"){
        ply_buttons[5].onclick();
        ply_buttons[5].classList.add("show");
        setTimeout( ()=>ply_buttons[5].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "7"){
        ply_buttons[6].onclick();
        ply_buttons[6].classList.add("show");
        setTimeout( ()=>ply_buttons[6].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else if( note === "8"){
        ply_buttons[7].onclick();
        ply_buttons[7].classList.add("show");
        setTimeout( ()=>ply_buttons[7].classList.remove('show'),intv );
        console.log("auto playing sound"+note);
    }
    else {
        console.log("auto playing sound 0");
    }
}
