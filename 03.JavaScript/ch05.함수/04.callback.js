function callFiveTimes(callback) {
    for (let i=0;i<5;i++){
        callback();
    }
}

const cb =function cb() {
    console.log('함수가 호출되었음.');
}

//cb();

//callFiveTimes(cb);

/* callFiveTimes(function cb() {
    console.log('함수가 호출되었음.');
}); */

callFiveTimes(() => {
    console.log('함수가 호출되었음.');
});