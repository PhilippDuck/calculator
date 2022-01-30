function add(value) {
    document.getElementById('resultArea').innerHTML += value;
    document.getElementById('messageArea').innerHTML = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById('resultArea').innerText);
        document.getElementById('resultArea').innerHTML = result;
    } catch (error) {
        document.getElementById('messageArea').innerHTML = "Fehler";
    }
    
    
}

function delLast() {
    let container = document.getElementById('resultArea')
    container.innerHTML = container.innerHTML.slice(0, -1);
    document.getElementById('messageArea').innerHTML = "";
}

function delAll() {
    document.getElementById('resultArea').innerHTML = "";
    document.getElementById('messageArea').innerHTML = "";
}