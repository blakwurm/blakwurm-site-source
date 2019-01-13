let af;
const flickerColors = ['#eef1', '#fff1', '#fef1', '#fea1', '#fff1', '#eee1', '#0aa1']
const framesBetween = 15
let framecounter = 0;
let c = document.querySelector('#maskcanvas');
let con = c.getContext('2d');
let b = document.querySelector('body');
function renderCRTeffect() {
    con.clearRect(0,0,100,100);
    let fillinx = Math.floor((framecounter%((flickerColors.length-1)/framesBetween))/framesBetween)
    con.fillStyle = flickerColors[fillinx]
    con.fillRect(0,0,100,100)
    con.fillStyle = flickerColors[(fillinx+2)%5]
    if (framecounter%2) {
        con.fillRect(0, (framecounter%1000)/10, 100, 4+(framecounter%2))
    }
    framecounter = (framecounter+1)%1500
}
function raf() {
    af = requestAnimationFrame(raf)
    renderCRTeffect()
}
raf()