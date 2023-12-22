const $ = (selector) => {
    return document.querySelector(selector);
};

const update = function () {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    $('.seconds').style.transform = `rotate(${seconds * 6}deg)`;
    $('.minutes').style.transform = `rotate(${minutes * 6}deg)`;
    $('.hours').style.transform = `rotate(${(hours % 12) * 30}deg)`;
};

setInterval(update, 1000);
