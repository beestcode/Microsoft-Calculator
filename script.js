document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('Display');
    display.value = '0';
});

function writevalue(value) {
    value = value === '×' ? '*' : value === '÷' ? '/' : value;
    let display = document.getElementById('Display');
    let last = display.value.slice(-1)
    let operators = ['+', '-', '*', '/'];

    if ( display.value === '0' && operators.includes(value)){
        return;
    }
    if (operators.includes(last) && operators.includes(value)) {
         return;
    }

    if ( value === '.' && last === '.') {
        return;
    }

    if (display.value === '0' ? (display.value = value) : (display.value += value)) return;
}

function remove() {
    let display = document.getElementById('Display')

    if (display.value.length > 1 ? display.value = display.value.slice(0, -1) : display.value = '0');
}

function clearall() {
    document.getElementById('Display').value = '0'
}