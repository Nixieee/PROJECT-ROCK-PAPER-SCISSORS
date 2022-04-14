function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function computerPlay(){
    let choice = ["Rock","Paper","Scissors"];
    let randomInt = getRandomInt(3);
    return choice[randomInt];
}
console.log(computerPlay());