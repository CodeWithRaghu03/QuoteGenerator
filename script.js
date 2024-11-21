// script.js
document.addEventListener('DOMContentLoaded', function () {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    const quotes = [
        "The best time to plant a tree was 20 years ago. The second best time is now.",
        "Your limitation—it’s only your imagination.",
        "Push yourself, because no one else is going to do it for you.",
        "Great things never come from comfort zones.",
        "Dream it. Wish it. Do it.",
        "Success doesn’t just find you. You have to go out and get it.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Dream bigger. Do bigger.",
        "Don’t stop when you’re tired. Stop when you’re done.",
        "Wake up with determination. Go to bed with satisfaction.",
        "Failure is not the opposite of success; it’s part of success.",

        "Success is not how high you have climbed, but how you make a positive difference to the world.",

        "Stay positive, work hard, make it happen.",

        "The only limit to our realization of tomorrow is our doubts of today.",

        "You are never too old to set another goal or to dream a new dream.",

        "Life is 10% what happens to us and 90% how we react to it.",

        "Don’t watch the clock; do what it does. Keep going.",

        "You have to be at your strongest when you’re feeling at your weakest.",

        "The harder you work, the luckier you get.",

        "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",

        "Do what you can, with what you have, where you are.",

        "It does not matter how slowly you go as long as you do not stop.",

        "Everything you’ve ever wanted is on the other side of fear.",

        "Success is not final, failure is not fatal: It is the courage to continue that counts.",

        "Believe you can and you’re halfway there.",

        "To succeed in life, you need two things: ignorance and confidence.",

        "Act as if what you do makes a difference. It does.",

        "Hardships often prepare ordinary people for an extraordinary destiny.",

        "You are braver than you believe, stronger than you seem, and smarter than you think.",

        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    newQuoteButton.addEventListener('click', function () {
        const randomQuote = getRandomQuote();
        quoteElement.textContent = randomQuote;
    });
});
