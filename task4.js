var array_task3 = [1,2,3,4,5,6,6,22,27,7,8,2,8,232,2,98,2];

function parseArray(array, number) {
    var counter = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            counter = counter + 1;
        }
    }
    if (counter > 0) {
    	console.log('This number count is ' + counter);
    } else {
    	console.log('false ' + counter);
    }
}

parseArray(array_task3, 2);