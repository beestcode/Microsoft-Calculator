document.addEventListener('DOMContentLoaded', function() {
    let display = document.getElementById('Display');
    // display.style.color = '';
    display.value = '0';
});

function writevalue(value) {
    value = value === '×' ? '*' : value === '÷' ? '/' : value;
    let display = document.getElementById('Display');
    // display.style.color = '';

    let last = display.value.slice(-1)
    let operators = ['+', '-', '*', '/'];

    if ( display.value === '0' && operators.includes(value)){
        return;
    }

    if ( display.value === '.' && operators.includes(value)){
        return;
    }

    if (operators.includes(last) && operators.includes(value)) {
         return;
    }

    if ( value === '.' && last === '.') {
        return;
    }
    if (value === '.' && display.value.split(/[\+\-\*\/]/).pop().includes('.')) return;
   
    //remove commas for calculation
    let rawvalue = display.value.replace(/,/g, '');

    // type the first number if display is 0 or format the number with commas
    if (display.value === '0' ? (display.value = value) : (display.value = formatnumber(rawvalue + value))) return;
}

function remove() {
    let display = document.getElementById('Display')
    // display.style.color = '';

    if (display.value.length > 1 ? display.value = display.value.slice(0, -1) : display.value = '0');
}

function clearall() {
    display = document.getElementById('Display')
    // display.style.color = '';

    display.value = '0';
}

function clearentry() {
    let display = document.getElementById('Display')
    // display.style.color = '';

    display.value = display.value.replace(/[\d.]+$/, "") || '0';
}

function calculate() {
    let display = document.getElementById('Display');
    if (display.value === '.') return;
    if (display.value.trim() === '') return;

    try {
        display.value = Function("return " + display.value)();
        // display.style.color = ''; // Reset to default color
    }
    catch (e) {
        display.value = 'Error';
        // display.style.color = 'red';
    }
}

function formatnumber(num) {
    return num.tostring().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
