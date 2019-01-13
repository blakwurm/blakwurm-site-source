let af;
const flickerColors = ['#eef1', '#fff1', '#fef1', '#fea1', '#fff1', '#eee1', '#0aa1']
const textColors = ['#fc9500ff', '#fc9500ff', '#fc9500ff', '#fc9500ff', '#fc9500ff', '#fc9500ff', '#fc9500ff']
const glowColors = ['#fcf000', '#fcf000', '#fcf000', '#fcf000', '#fcf000', '#fcf000', '#fcf000']
const framesBetween = 3
let framecounter = 0;
let c = document.querySelector('#maskcanvas');
let con = c.getContext('2d');
let b = document.querySelector('body');
function renderCRTeffect() {
    con.clearRect(0,0,100,100);
    let fillinx = (framecounter%((flickerColors.length-1)/framesBetween))/framesBetween
    con.fillStyle = flickerColors[fillinx]
    con.fillRect(0,0,100,100)
    con.fillStyle = flickerColors[(fillinx+2)%3]
    if (framecounter%2) {
        con.fillRect(0, (framecounter%500)/5, 100, 3)
    }
    // b.style.setProperty('--color-text', textColors[fillinx])
    framecounter = (framecounter+1)%1500
}
function raf() {
    af = requestAnimationFrame(raf)
    renderCRTeffect()
}
raf()