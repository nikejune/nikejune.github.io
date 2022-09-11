const background = document.querySelector("#background");
const imgArr = ["bagan.jpg", "forest.jpg", "road.jpg", "sunrise.jpg"];
const randomImg = imgArr[Math.floor(Math.random() * imgArr.length)];
console.log(randomImg);
background.style.backgroundImage = `url('img/${randomImg}')`;
background.style.backgroundRepeat = "no-repeat";
background.style.backgroundSize = "cover";
