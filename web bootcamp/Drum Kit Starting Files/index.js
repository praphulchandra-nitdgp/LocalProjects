for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var audio = new Audio("./sounds/crash.mp3","./sounds/snare.mp3","./sounds/tom-1/mp3");
        audio.play();
    });
}
