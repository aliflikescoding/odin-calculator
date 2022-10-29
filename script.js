/* Non Action Buttons */
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let dot = document.querySelector('#dot');

/* Action Buttons */
let clear = document.querySelector('#clear');
let backSpace = document.querySelector('#backspace');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');
let mode = document.querySelector('#color-mode');

/* User Variables */
let root = document.querySelector(':root');
let modeIcon = document.querySelector('#mode-icon');
let areaInside = document.querySelector('.area-inside');
let numMode = 1;
var s1 = "";
var op = "";
var s2 = "";

/* events */
one.addEventListener('click', () => {
    addToString(1);
});
two.addEventListener('click', () => {
    addToString(2);
});
three.addEventListener('click', () => {
    addToString(3);
});
four.addEventListener('click', () => {
    addToString(4);
});
five.addEventListener('click', () => {
    addToString(5);
});
six.addEventListener('click', () => {
    addToString(6);
});
seven.addEventListener('click', () => {
    addToString(7);
});
eight.addEventListener('click', () => {
    addToString(8);
});
nine.addEventListener('click', () => {
    addToString(9);
});
zero.addEventListener('click', () => {
    addToString(0);
});
mode.addEventListener('click', () => {
    changeColorMode();
})
clear.addEventListener('click', () => {
    clearAll();
});
plus.addEventListener('click', () => {
    addOperator('+');
});
minus.addEventListener('click', () => {
    addOperator('-');
});
times.addEventListener('click', () => {
    addOperator('*');
});
divide.addEventListener('click', () => {
    addOperator('/');
});

/* functions */
function changeColorMode() {
    if (mode.classList.contains('light')) {
        mode.classList.remove('light');
        mode.classList.add('dark');
        if (mode.classList.contains('dark')) {
            root.style.setProperty('--primary-color', '#5a5a97');
            root.style.setProperty('--secondary-color', '#1d2951');
            root.style.setProperty('--dark-color', '#f6f6f6');
            if (modeIcon.classList.contains('fa-sun')) {
                modeIcon.classList.remove('fa-sun');
                modeIcon.classList.add('fa-moon');
            }
        }
    }
    else {
        mode.classList.remove('dark');
        mode.classList.add('light')
        if (mode.classList.contains('light')) {
            root.style.setProperty('--primary-color', '#f6f6f6');
            root.style.setProperty('--secondary-color', '#d0d0d0');
            root.style.setProperty('--dark-color', '#292929');
            if (modeIcon.classList.contains('fa-moon')) {
                modeIcon.classList.remove('fa-moon');
                modeIcon.classList.add('fa-sun');
            }
        }
    }
}

let text1 = document.createElement('p');
let text2 = document.createElement('p');
let operator = document.createElement('p');
areaInside.appendChild(text1);
areaInside.appendChild(operator);
areaInside.appendChild(text2);

function addToString(x) {
    if (numMode === 1) {
        s1 += `${x}`;
        text1.textContent = `${Number(s1)}`;
    }
    else {
        s2 += `${x}`;
        text2.textContent = `${Number(s2)}`;
    }
}

function addOperator(sym) {
    if (s1.length >= 1) {
        s2 = '';
        text2.textContent = ``;
        if (sym === '+') {
            op = '+';
            operator.textContent = `+`;
        }
        if (sym === '-') {
            op = '-';
            operator.textContent = `-`;
        }
        if (sym === '*') {
            op = '*';
            operator.innerHTML = `<i class="fa-sharp fa-solid fa-xmark"></i>`;
        }
        if (sym === '/') {
            op = '/';
            operator.innerHTML = `<i class="fa-solid fa-divide"></i>`;
        }
        numMode = 2;
    }
}

function clearAll() {
    s1 = "";
    op = "";
    s2 = "";
    text1.textContent = ``;
    operator.textContent = ``;
    text2.textContent = ``;
    numMode = 1;
}