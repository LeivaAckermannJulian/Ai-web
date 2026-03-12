// Switch modules
function showModule(moduleId) {
    const modules = document.querySelectorAll('.module');
    modules.forEach(m => {
        m.style.display = 'none';
    });
    document.getElementById(moduleId).style.display = 'block';
}

// Add calculator
function calculate() {
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    if(!isNaN(n1) && !isNaN(n2)){
        document.getElementById('calcResult').innerText = "Result: " + (n1 + n2);
    } else {
        document.getElementById('calcResult').innerText = "Please enter numbers!";
    }
}

// Subtract calculator
function subtract() {
    const n1 = Number(document.getElementById('sub1').value);
    const n2 = Number(document.getElementById('sub2').value);
    if(!isNaN(n1) && !isNaN(n2)){
        document.getElementById('subResult').innerText = "Result: " + (n1 - n2);
    } else {
        document.getElementById('subResult').innerText = "Please enter numbers!";
    }
}

// Gallery enlarge image
function enlargeImage(img) {
    document.getElementById('enlargedImage').src = img.src;
    document.getElementById('enlargedContainer').style.display = 'flex';
}

function closeImage() {
    document.getElementById('enlargedContainer').style.display = 'none';
}
