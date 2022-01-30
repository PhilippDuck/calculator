function add(value) {
    document.getElementById('resultArea').innerHTML += value;
}

function calculate() {
    let result = eval(document.getElementById('resultArea').innerText);
    document.getElementById('resultArea').innerHTML = result;
}

function del() {
    let container = document.getElementById('resultArea')
    container.innerHTML = container.innerHTML.slice(0, -1);
}