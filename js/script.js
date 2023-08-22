let box = document.getElementById("demo");

let screen = document.getElementById("screen");
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText; //to make it clickable
        //logic for working
        if(buttonText == '%') {
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '=') {
            screen.value = newFunction(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}



function print(msg) {
    let p = document.createElement('p');
    p.innerText = msg;

    box.appendChild(p);
}