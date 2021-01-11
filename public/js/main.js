let colors = [];
let animals = document.getElementsByClassName('animal');;

const colorGen = () => { 
  for(let i = 0; i <3; i++) {
    colors[i] = Math.floor(Math.random() * 255);
  }

};