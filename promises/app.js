const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        document.writeln(`async task completed <br><br>`);
        resolve();
    }, 1000);
})

promiseOne.then(function () {
    document.writeln('Promise Consumed');
    // console.log('Promise consumed');
})

