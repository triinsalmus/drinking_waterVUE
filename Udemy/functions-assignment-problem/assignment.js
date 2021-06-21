const DEFAULT_VALUE = 'Triin';


const sayHello = name => console.log('Hi, ' + name);

const sayHello1 = (hello, name) => {
    console.log(hello + ', ' + name);
};

const sayHello2 = () => {
    console.log('Hi, hardcoded Triin');
};

const sayHello3 = name => name === '' ? console.log('Hi, ' + (name = DEFAULT_VALUE)) : console.log('Hi, ' + name);

const sayHello4 = name => 'Hi, ' + name;

const sayHello5 = (name, hello = 'Hi, ') => console.log(hello, name);

const checkInput = (callBack, ...names) => {
    let hasEmptyString = false;
    for (let name of names) {
        if (!name) {
            hasEmptyString = true;
            break;
        }
    }
    if (!hasEmptyString) {
        callBack();
    }
};



sayHello('Triin');
sayHello1('Hi', 'Triin');
sayHello2();
sayHello3('isntEmptyTriin');
console.log(sayHello4('Triin'));
sayHello5('Triin', 'Hello');
checkInput(() => {
        console.log('Nothing is empty!');
    },
    'Triin0', 'Triin1', '', 'Triin3', 'Triin4');