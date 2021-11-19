window.onload = function(){
    const top_head= document.querySelector(".first-sounds");
    const navigation=document.querySelector(".desktop-links");


    function AhemPlay(){
        var ahem = document.getElementById("ahemsound");
        //var ahem=new Audio('./sounds/ahem_x.wav');
        ahem.play();
    }
    function BatPlay(){

    }
    function ClapPlay(){

    }
    function CorkPlay(){

    }
    function CowPlay(){

    }

    function toggle(){
        if (window.getComputedStyle(navigation).display==="none"){
            navigation.display="block" ;
        } else{
            navigation.style.display="none";
        }
    }

    top_head.addEventListener("click", toggle);
}