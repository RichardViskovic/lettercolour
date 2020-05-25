const log = document.getElementById('log');

document.addEventListener('keyup', logKey);

function logKey(e) {
    let temp = e.keyCode;
    temp = String.fromCharCode(temp);
    log.textContent = temp;
}


function colorPicker(color) {
    log.style.color = color;
    document.getElementById("palette").style.display = "none";
    document.getElementById("color-picker").style.display = "block";
}

function showColors(){
    document.getElementById("palette").style.display = "block";
    document.getElementById("color-picker").style.display = "none";
}


