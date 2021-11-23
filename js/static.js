const colors = ["#86B3AD", "#FFBFFD", "#D8FFFA", "#FFF2BF", "#B3AB8F", "#0D0D0D", "#95BFA4", "#D8F2E1", "#F2DACC", "#FFFFFF"]

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // Get random number from 0 - 4
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}