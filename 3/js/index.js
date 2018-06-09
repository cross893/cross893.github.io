console.clear();
var hangTime = 2000;
var spinTime = 300;
document.documentElement.style.setProperty('--hang-time', hangTime / 1000);
document.documentElement.style.setProperty('--spin-time', spinTime / 2000);
cards = ['credit-card', 'birthday-card', 'playing-card']; // 'library-card', 'loyality-card', 
selected = -1;
var getCard = function (position) {
    if (position < 0)
        position = cards.length - 1;
    if (position >= cards.length)
        position = 0;
    console.log(cards[position]);
    return document.querySelector('#' + cards[position]);
};
var nextCard = function () {
    selected++;
    if (selected >= cards.length)
        selected = 0;
    getCard(selected - 1).setAttribute('data-state', 'out');
    getCard(selected).setAttribute('data-state', 'show');
    getCard(selected + 1).setAttribute('data-state', 'in');
};
setInterval(function () { return nextCard(); }, hangTime);
nextCard();