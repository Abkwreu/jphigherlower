window.onload = function() {
    // console.log(data[2345]);
};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randInt(max) {
    return Math.floor(Math.random() * max);
};