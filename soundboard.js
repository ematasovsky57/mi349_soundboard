window.onload = function(){
    const top_head= document.querySelector(".first-sounds");
    const navigation=document.querySelector(".desktop-links");


    function toggle(){
        if (window.getComputedStyle(navigation).display==="none"){
            navigation.display="block" ;
        } else{
            navigation.style.display="none";
        }
    }

    //top_head.addEventListener("click", toggle);
}


function AhemPlay(){
    var ahem = document.getElementById("ahemsound");
    ahem.play();
}
function BatPlay(){
    var bat = document.getElementById("batsound");
    bat.play();
}
function ClapPlay(){
    var clap = document.getElementById("clapsound");
    clap.play();
}
function CorkPlay(){
    var cork = document.getElementById("corksound");
    cork.play();
}
function CowPlay(){
    var cow = document.getElementById("cowsound");
    cow.play();
}
