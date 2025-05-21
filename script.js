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
    if ( value === '.' && last === '.') {
        return;
    }
    if (display.value === '0' ? (display.value = value) : (display.value += value)){
        return;
    }
    

 
}