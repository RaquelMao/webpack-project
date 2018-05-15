const config = require('./config.json');

module.exports = function() {
    const greet = document.createElement('div');
    greet.classList.add(`root`);
    greet.textContent = config.greetText;
    return greet;
};
