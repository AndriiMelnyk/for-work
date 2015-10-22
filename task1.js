var andriiArray = [1, 2, 3, 4, 5, 6, 7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20];

function parseArray(array){
    for(var i = 0, len = array.length; i < len; i++){
        if (array[i] % 3 === 0 && array[i] % 2 === 0) {
            console.log("універсальне");
        } else if (array[i] % 3 === 0) {
            console.log("трійкове");
        } else if(array[i] % 2 === 0) {
            console.log("парне");
        } else {
            console.log(array[i]);
        }
    }
}

parseArray(andriiArray);