// завдання 1

function getPromise(message, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(message), delay);
    });
};

getPromise("test promise", 2000).then(function(data) {
    console.log(data);        
});

// завдання 2

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
      const numbers = arr.reduce((prev, curr) => {
        if (typeof curr === 'number') {
          return prev * curr;
        } else {
          reject('Error! Incorrect array!');
        };
      }, 1);
      
      resolve(numbers);
    });
};

calcArrProduct([3,4,5]).then(result => console.log(result));
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));

// завдання 3

new Promise(function (resolve, reject) {
    const number = +prompt('number?');
    if (isNaN(number) || number == '') {
        reject();
    };
    resolve(number);
 }).catch(function (error) {
    return new Promise(function (resolve, reject) {
        function promptNumber() {
            const number = +prompt('number?');
            if (isNaN(number) || number == '') {
                promptNumber();
            }
            resolve(number);
        };
        promptNumber();
    });
 }).then(function (result) {
    console.log(result);
});

// завдання 4

const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
    for (let i = 0; i <= 9; i++) {
        const result = await delay(i, Math.random() * 3000);
        console.log(result);
    };
};
showNumbers();