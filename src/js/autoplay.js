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
var nathan;
var notes =[];
var songscript_1 ="012345678";
var songscript_2 ="333033303512300444404333032232050"+"3330333035123000444433355431000"//jingle bell
var songscript_3 ="11556650443322105544332055443320115566504433221" //C C G G A A G 0 F F E E D D C 0 G G F F E E D 0 G G F F E E D 0 C C G G A A G 0 F F E E D D C
var songscript_4 ="555233207766502555233207766502255522550555055505550555055523320776650"
var songscript_5 ="511123332123103345543453011233212310551112333212310"
var songlist = [songscript_1, songscript_2, songscript_3,songscript_4,songscript_5]
var chosensong = songscript_3;
var choice = document.getElementsByClassName("list")[0];
var auto_button  = document.getElementById("start");
var stop_button  = document.getElementById("stop");

stop_button.addEventListener("click",
    function()
    {
        end();
    }
)
auto_button.addEventListener("click",
    function()
    {
        chosensong = songlist[choice.value-1];
        console.log(songlist[choice.value-1])
        auto_play(chosensong);

        auto_button.classList.add("hidden");
        stop_button.classList.remove("hidden");


    }
)
var end = function()
{
    stop_play();
        
        auto_button.classList.remove("hidden");
        stop_button.classList.add("hidden");
}
var auto_play = function(songlist)
{
    var note = "";
    for(var i=0;i<songlist.length;i++){
        (function(note){
        note = songlist[i];
        
        //console.log("note "+note);
        var temp = setTimeout( ()=>play(note) ,i*450);
        notes.push(temp);
        })(note)
    if(i === (songlist.length-1))
    {
        nathan = setTimeout( ()=>end() ,(songlist.length-1)*450);
    }
    }
}

var stop_play = function()
{
    for(var i = 0;i < notes.length; i++)
    {
        clearTimeout(notes[i]);
        clearTimeout(nathan);
    }
    notes = [];
    nathan = null;
}

var play = function(note)
{
    var intv = 300;
    if( note === "1"){
        ply_buttons[0].onclick();
        ply_buttons[0].classList.add("show");
        setTimeout( ()=>ply_buttons[0].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "2"){
        ply_buttons[1].onclick();
        ply_buttons[1].classList.add("show");
        setTimeout( ()=>ply_buttons[1].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "3"){
        ply_buttons[2].onclick();
        ply_buttons[2].classList.add("show");
        setTimeout( ()=>ply_buttons[2].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "4"){
        ply_buttons[3].onclick();
        ply_buttons[3].classList.add("show");
        setTimeout( ()=>ply_buttons[3].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "5"){
        ply_buttons[4].onclick();
        ply_buttons[4].classList.add("show");
        setTimeout( ()=>ply_buttons[4].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "6"){
        ply_buttons[5].onclick();
        ply_buttons[5].classList.add("show");
        setTimeout( ()=>ply_buttons[5].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "7"){
        ply_buttons[6].onclick();
        ply_buttons[6].classList.add("show");
        setTimeout( ()=>ply_buttons[6].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else if( note === "8"){
        ply_buttons[7].onclick();
        ply_buttons[7].classList.add("show");
        setTimeout( ()=>ply_buttons[7].classList.remove('show'),intv );
        //console.log("auto playing sound"+note);
    }
    else {
        //console.log("auto playing sound 0");
    }
}
