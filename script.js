const data = {
    1: {
        data: "The only way to do great work is to love what you do.",
        authore: "-Steve Jobs"
    },
    2: {
        data: "In the end, it's not the years in your life that count. It's the life in your years.",
        authore: "- Abraham Lincoln"
    },
    3: {
        data: "Believe you can and you're halfway there.",
        authore: "- Theodore Roosevelt"
    },
    4: {
        data: "The greatest glory in living lies not in never falling, but in rising every time we fall",
        authore: "- Nelson Mandela"
    },
    5: {
        data: "Life is what happens when you're busy making other plans.",
        authore: "- John Lennon"
    },
    6: {
        data: "The future belongs to those who believe in the beauty of their dreams.",
        authore: "- Eleanor Roosevelt"
    },
    7: {
        data: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        authore: " - Winston Churchill"
    },
    8: {
        data: "You miss 100% of the shots you don't take.",
        authore: "- Wayne Gretzky"
    },
    9: {
        data: "It does not matter how slowly you go as long as you do not stop",
        authore: "- Confucius"
    },
    10: {
        data: "The only impossible journey is the one you never begin.",
        authore: "- Tony Robbins"
    },
    11: {
        data: "Strive not to be a success, but rather to be of value.",
        authore: "- Albert Einstein"
    },
    12: {
        data: "Happiness is not something ready made. It comes from your own actions.",
        authore: "- Dalai Lama"
    },
    13: {
        data: "It is never too late to be what you might have been",
        authore: "- George Eliot"
    },
    14: {
        data: "The best way to predict the future is to invent it.",
        authore: "- Alan Kay"
    },
    15: {
        data: "The only limit to our realization of tomorrow will be our doubts of today.",
        authore: "Franklin D. Roosevelt"
    },
    16: {
        data: "The only thing worse than being blind is having sight but no vision.",
        authore: "- Helen Keller"
    },
    17: {
        data: "Success is walking from failure to failure with no loss of enthusiasm.",
        authore: "- Winston Churchill"
    },
    18: {
        data: " You must be the change you wish to see in the world.",
        authore: "- Mahatma Gandhi"
    },
    19: {
        data: "The only person you are destined to become is the person you decide to be",
        authore: "- Ralph Waldo Emerson"
    },
    20: {
        data: "Do not wait for leaders; do it alone, person to person",
        authore: "-Mother Teresa"
    }


}


function cli() {
    let contant = document.getElementById("contant")

    let Authore = document.getElementById("Authore")

    const randomNumber = Math.floor(Math.random() * 20) + 1;

    Authore.innerHTML = data[randomNumber].authore

    contant.innerHTML = data[randomNumber].data
}

console.log(document.getElementById("btn").addEventListener("click", cli))