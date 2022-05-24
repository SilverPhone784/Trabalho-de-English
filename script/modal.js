function box(modalId) {
    const modal = document.getElementById(modalId)
    modal.classList.add('show')
    addEventListener('click', (e) => {
        if(e.target.id == modalId || e.target.id == 'close-button') {
            modal.classList.remove('show')
            nextBg('none', 'bg1')
            nextEv('none', 'ev1')
            nextPx('none', 'px1')
        }
    })
}
var i = 1
function nextBg(id, newbox) {
    if(id == 'none') {
        const inicial = document.getElementById(newbox).style.display = 'inline-flex'
        const bg2 = document.getElementById('bg2').style.display = 'none'
        const bg3 = document.getElementById('bg3').style.display = 'none'
        const bg4 = document.getElementById('bg4').style.display = 'none'
    } else {
    const modal = document.getElementById(id).style.display = 'none'
    const modal2 = document.getElementById(newbox).style.display = 'inline-flex'
}
}
function nextEv(id, newbox) {
    if(id == 'none') {
        const inicial = document.getElementById(newbox).style.display = 'inline-flex'
        const ev2 = document.getElementById('ev2').style.display = 'none'
        const ev3 = document.getElementById('ev3').style.display = 'none'
        const ev4 = document.getElementById('ev4').style.display = 'none'
    } else {
    const modal = document.getElementById(id).style.display = 'none'
    const modal2 = document.getElementById(newbox).style.display = 'inline-flex'
}
}
function nextPx(id, newbox) {
    if(id == 'none') {
        const inicial = document.getElementById(newbox).style.display = 'inline-flex'
        const px2 = document.getElementById('px2').style.display = 'none'
        const px3 = document.getElementById('px3').style.display = 'none'
        const px4 = document.getElementById('px4').style.display = 'none'
        const px5 = document.getElementById('px5').style.display = 'none'
    } else {
    const modal = document.getElementById(id).style.display = 'none'
    const modal2 = document.getElementById(newbox).style.display = 'inline-flex'
}
}