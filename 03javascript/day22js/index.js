// <!-- Event Listener -->

// <!-- Mouse Event -->
// 1: click
// 2: dblclick
// 3: mouseover
// 4: mousemove

// <!-- Keyboard Event -->

// 1: keydown
// 2: keyup

// <!-- Event Object -->
// 1: event 
// 2: event.target // It is the element that triggered the event
// 3: event.type // It is the type of event
// 4: event.key // It is the key that was pressed
// 5: event.clientX // It is the horizontal coordinate of the mouse pointer
// 6: event.clientY // It is the vertical coordinate of the mouse pointer
const button = document.querySelector('button');

button.addEventListener('click', ()=>{


    // Read the data
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    if(isNaN(number1)||isNaN(number2)) // isNaN() is a function it checks value is number or not
        return;

    // Output the result

    const result = number1+number2;
    const re = document.getElementById('result');
    re.textContent = "Result: "+result;
})


// BMI Calculator
// Dhaej Calculator(Male)
// Alimony Calculator(Female) 

55.19