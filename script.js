document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('Display');
    display.value = '0';
});

function writevalue(value) {
    value = value === '×' ? '*' : value === '÷' ? '/' : value;
    let display = document.getElementById('Display');
    let operators = ['+', '-', '*', '/'];

    if ( display.value === '0' && operators.includes(value)){
        return;
    }
    if (display.value === '0' ? (display.value = value) : (display.value += value)){
        return;
    }
    
    
 
}