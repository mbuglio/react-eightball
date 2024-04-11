function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function randInt(max){
    return Math.floor(Math.random() * max)
}

export { choice, randInt};