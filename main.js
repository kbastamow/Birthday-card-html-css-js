const starGround = document.getElementById("starGround");



const palette = ["#9ad2cbff", "#d7ebbaff", "#faa613ff", "#f44708ff", "#a10702ff"];  


function randomColor(array) {
    let color = Math.floor(Math.random() * array.length);
    console.log("HEre");
    return array[color];

}

function randomPos(){
    return Math.floor(Math.random()* 301)
}


// let intervalTime = 1000;
// let animation = setInterval(makeStar, 50)
// let reduceInterval =setInterval(reduce, 1000)

function makeStar() {
    let star = document.createElement("div")
    star.innerHTML = `<i class="fa-solid fa-star fa-xl" style="color: ${randomColor(palette)}; position:absolute; right:${randomPos()}px"></i>`
    starGround.appendChild(star);
}

// function reduce() {
//     intervalTime -= 50;
//     if (intervalTime <= 0) {
//         clearInterval(animation);
//       }
// }


