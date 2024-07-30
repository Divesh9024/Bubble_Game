var timer = 30;
var score = 0;
var hitrun = 0;

// jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundhega,waha bhi naa milne par event parent ke parent ke parent par listener dhundega.

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}

function getNewHit(){
    hitrun = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrun;
}

function makeBubble(){
var clutter = "";
for(var i = 0; i<=70; i++){
    var random = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${random}</div>`;
}

document.querySelector("#pannelbottom").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function(){
        if (timer > 0){
        timer--;        // yha pr ye ^function() har 1 second me chalega matlab is function me jo bhi likha hoga vo har 1 second me chalega
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pannelbottom").innerHTML = `<h1>Game Over<h1/>`;
        }
    }, 1000);
}

document.querySelector("#pannelbottom").addEventListener("click", function(details){
    var clickednum = Number(details.target.textContent);
    // console.log(Number(details.target.textContent));
    // alert("chal rha h ");
    if(clickednum == hitrun){
        increaseScore();
        makeBubble();
        getNewHit();

    }
})

// increaseScore();
getNewHit();
runTimer();
makeBubble();