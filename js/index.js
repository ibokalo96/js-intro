// alert('hello!');

let greetings = 'world!';
// alert(greetings);

const message = 'hello ' + greetings;
alert(message);

const userAge = parseFloat(prompt('Enter your age'));
alert('Your age is:' + userAge);


const nextAge = add(userAge + 1);
alert(nextAge);

if (userAge >= 18) {
    alert('You r adult')
} else {
    alert('you r underaged!')
}

function add(a, b) {
    const result = a+b;
    return result;
}