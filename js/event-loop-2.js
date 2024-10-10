console.log('syncronous-1');

setTimeout(function timeOut() {
    console.log('asyncronous');
}, 5000);

console.log('syncronous-2');

setTimeout(function timeOut() {
    console.log('asyncronous-2');
}, 10000);

console.log('syncronous-3');

setTimeout(function timeOut() {
    console.log('asyncronous-3');
}, 15000);