var charactor = document.getElementById("charactor");
var block = document.getElementById("block");
var overlay = document.getElementById("overlay");

function jump() {
    if (charactor.classList != "animate") {
        charactor.classList.add("animate");
        setTimeout(function () {
            charactor.classList.remove("animate");
        }, 500)
    }
}

var checkHit = setInterval(function(){
    var charactorTop = parseInt(window.getComputedStyle(charactor).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(
        blockleft<35 && blockleft>0 && charactorTop >= 130
    ){
        block.style.animation = "none";
        block.style.direction="none";
        block.style.background = "none";
        charactor.classList.add("dead");
        charactor.classList.remove("alive");
        overlay.classList.add("d-block")
      
    }

}, 10)


function reload(){
    window.location.reload();
}