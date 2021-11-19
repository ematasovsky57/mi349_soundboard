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

    top_head.addEventListener("click", toggle);
}