// LOVE COUNTER

const startDate = new Date("2025-08-04");

function updateCounter(){

  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("days").innerHTML = days;

}

updateCounter();


// BUTTON MESSAGE

document.getElementById("loveBtn").onclick = () => {

  alert("hbkkkkkk ❤️");

};


// FLOATING HEARTS

setInterval(() => {

  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.position = "fixed";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.top = "-20px";

  heart.style.fontSize = Math.random() * 25 + 20 + "px";

  heart.style.opacity = Math.random();

  heart.style.zIndex = "99999";

  document.body.appendChild(heart);

  let pos = 0;

  const fall = setInterval(() => {

    pos++;

    heart.style.top = pos + "px";

    if(pos > window.innerHeight){

      clearInterval(fall);

      heart.remove();

    }

  },10);

},400);