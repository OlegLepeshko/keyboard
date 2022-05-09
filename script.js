let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shiftLeft = document.querySelector('.shift_left');
let shiftRight = document.querySelector('.shift_right');
let capsLockKey = document.querySelector('.caps_lock_key');
let toggleCircle = document.querySelector('.toggle_circle');
let nightMode = document.querySelector('.night_mode');
let body = document.querySelector('body');
let textInput = document.querySelector('.text');
let changeColor = document.querySelector('.change_light_color');
let colorsInput = document.querySelector('.colors_input');
let keyboardLights = document.querySelector('.keyboard_lights');
let keyboardWrapp = document.querySelector('.keyboard_wrapp');
let backspace = document.querySelector('.backspace_key');
let tab = document.querySelector('.tab_key');
let right = document.querySelector('.key-right');
let left = document.querySelector('.key-left');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let enter = document.querySelector('.enter_key')


backspace.addEventListener('click', () => {
    textInput.value = textInput.value.split('').splice(0, textInput.value.length - 1).join('')
});
let capsPos = -1;
let capsState = false;

tab.addEventListener('click', () => {
    textInput.value +=  "  ";  
});

enter.addEventListener('click', () => {
    textInput.value +='\n';  
});

capsLockKey.addEventListener('click', () => {
    checkCaps = textInput.value.length;
    capsState = capsState === true ? false : true;
});
spaceKey.addEventListener('click', () => {
    textInput.value += " "; 
});

function func() {
input.focus();
 };

right.addEventListener('click', () => {
    func(input,6); 
 });

left.addEventListener('click', () => {
    func(input,6);
});

two.addEventListener('click', () => {
    func(input,6);
});

three.addEventListener('click', () => {
    func(input,6);
});

for(let i = 0; i < keys.length; i++) {
    let value = keys[i].innerHTML;
    keys[i].setAttribute('keyname', value);
    keys[i].setAttribute('lowerCaseName',value.toLowerCase());
    keys[i].addEventListener('click', () => {
      keys[i].classList.toggle('remove');
      if (value === 'Backspace') {
       
    }else if (value === 'Alt') {

    }else if (value === 'Ctrl') {

    }else if (value === 'Win') {

    }else if (value === 'Shift') {

    }else if (value === '<img src="../image/Arrow.svg" alt="">') {

    }else if (value === '<img src="../image/Arrow (1).svg" alt="">') {

    }else if (value === 'Enter') {

    }else if (value === 'Tab') {

    }else if (value === 'Caps Lock') {

    }else {
        
       if (capsState === true) { 
           if (capsPos <= i) {
            textInput.value += value.toUpperCase()
           }
        
       } else {
        textInput.value += value.toLowerCase();   
       }
       
      }
    } 
    );
 
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
        if(e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
        }
        if(e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
        }
        if(e.code == 'CapsLock') {
            capsLockKey.classList.toggle('active');
        }
        

    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyname' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        if(e.code == 'ShiftLeft') {
            shiftRight.classList.remove('active')
            shiftRight.classList.remove('remove')
        }
        if(e.code == 'ShiftRight') {
            shiftLeft.classList.remove('active')
            shiftLeft.classList.remove('remove')
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})


nightMode.addEventListener('click',function() {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
    nightMode.classList.toggle('active');
    keyboardWrapp.classList.toggle('active');
    textInput.classList.toggle('active');
    changeColor.classList.toggle('active');
    for(let i = 0; i < keys.length; i++) {
        keys[i].classList.toggle('keys_night')
    }
})

colorsInput.addEventListener('input',function() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].style.color = colorsInput.value
    }
    keyboardLights.style.background = colorsInput.value;
})