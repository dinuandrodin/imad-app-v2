console.log('Loaded!');

//change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'NEW-VALUE';

//move the image
var img = document.getElementById('madi');
function moveRight () {
    marginLeft = marginLeft + 100;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function () {
    var interval = setInterval(moveRight, 100);
   // img.style.marginLeft = '100px';
};