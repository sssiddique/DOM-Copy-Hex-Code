function generateRgb(){
let red = Math.floor((Math.random()*255));
let green = Math.floor((Math.random()*255));
let blue = Math.floor((Math.random()*255));

return rgb = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
let hexcode = generateRgb();
let copy = document.getElementById("cp-btn")
copy.addEventListener('click', function(){
    navigator.clipboard.writeText(hexcode);
});


document.getElementById('btn').addEventListener('click', () => {
    selector = document.getElementById('root');
    selector.style.background = hexcode;
    //console.log(selector);
    input = document.getElementById("input");
    input.value = hexcode;
    console.log(rgb);
});
