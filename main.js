const starGround = document.getElementById("starGround");
const beginAgain = document.getElementById("back")
const palette = ["#9ad2cbff", "#d7ebbaff", "#faa613ff", "#f44708ff", "#a10702ff"];  
let count = 0;  //for the animation
let sec = 1000; //interval starts at 1s
let animation = setInterval(makeStar, sec) 

function randomColor(array) {
    let color = Math.floor(Math.random() * array.length);
    return array[color];
}

function randomPos(){
    return Math.floor(Math.random()* 275)
}

function makeStar() {
    let star = document.createElement("div")
    star.innerHTML = `<i class="fa-solid fa-star fa-xl" style="color: ${randomColor(palette)}; position:absolute; right:${randomPos()}px"></i>`
    starGround.appendChild(star);
    count++;
    if (sec <= -5000) {  //stop animation after starburst
        sec = 1000;
        count = 0;
        clearInterval(animation);  
    }
    if (count === 5) { //every 5 rounds, the interval gets reduced
        sec -= 100
        count = 0
        clearInterval(animation);  //Clears the interval completely
        animation = setInterval(makeStar, sec); //starts it again,  now with less time
    }
}

beginAgain.addEventListener('click', function() {
  location.reload();
});

