var classCycle = [' intro-bg01', ' intro-bg02', ' intro-bg03', ' intro-bg04', ' intro-bg05', ' intro-bg06'];

var randomNumber = Math.floor(Math.random() * classCycle.length);
var classToAdd = classCycle[randomNumber];

var el = document.getElementById('intro');
if(el) {
    el.className += classToAdd;
}
