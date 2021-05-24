// Get input
// Convert it into a raw number string
// Use a lookup table to determine if number falls between a range
// Return horoscope to outer function to select and return a random prediction
// Show both horoscope and prediction to user

const zodiacs = {
    0: {
        zodiac: "Aries",
        fromDate: 321,
        toDate: 420,
        img: "img/aries.jpg",
        alt: "Symbol for Aries, a ram"
    },
    1: {
        zodiac: "Taurus",
        fromDate: 421,
        toDate: 520,
        img: "img/taurus.jpg",
        alt: "Symbol for Taurus, a bull"
    },
    2: {
        zodiac: "Gemini",
        fromDate: 521,
        toDate: 620,
        img: "img/gemini.jpg",
        alt: "Symbol for Gemini, twins"
    },
    3: {
        zodiac: "Cancer",
        fromDate: 621,
        toDate: 722,
        img: "img/cancer.jpg",
        alt: "Symbol for Cancer, a crab"
    },
    4: {
        zodiac: "Leo",
        fromDate: 723,
        toDate: 822,
        img: "img/leo.jpg",
        alt: "Symbol for Leo, a lion"
    },
    5: {
        zodiac: "Virgo",
        fromDate: 823,
        toDate: 922,
        img: "img/virgo.jpg",
        alt: "Symbol for Virgo, a maiden"
    },
    6: {
        zodiac: "Libra",
        fromDate: 923,
        toDate: 1022,
        img: "img/libra.jpg",
        alt: "Symbol for Libra, scales"
    },
    7: {
        zodiac: "Scorpio",
        fromDate: 1023,
        toDate: 1122,
        img: "img/scorpio.jpg",
        alt: "Symbol for Scorpio, a scorpion"
    },
    8: {
        zodiac: "Sagittarius",
        fromDate: 1123,
        toDate: 1221,
        img: "img/sagittarius.jpg",
        alt: "Symbol for Sagittarius, a centaur"
    },
    9: {
        zodiac: "Capricorn",
        fromDate: 1222,
        toDate: 1231,
        img: "img/capricorn.jpg",
        alt: "Symbol for Capricorn, a goat"
    },
    10: {
        zodiac: "Capricorn",
        fromDate: 101,
        toDate: 119,
        img: "img/capricorn.jpg",
        alt: "Symbol for Capricorn, a goat"
    },
    11: {
        zodiac: "Aquarius",
        fromDate: 120,
        toDate: 219,
        img: "img/aquarius.jpg",
        alt: "Symbol for Aquarius, a water bearer"
    },
    12: {
        zodiac: "Pisces",
        fromDate: 220,
        toDate: 320,
        img: "img/pisces.jpg",
        alt: "Symbol for Pisces, a fish"
    }
};


const readings = {
    1: "The morning might find you sitting like a stick in the mud. People might be getting down on you for not contributing, but tell them to be patient. You will be raring to go by nightfall. The catalyst may come from an outside source. Be on the lookout for a challenge. Someone might rattle your cage a bit too much, so be patient and don't take it personally.",
    2: "Things are moving your way. As the day progresses, you will find that the energy intensifies. Conflicts may arise near sundown, but don't worry about it too much. See it as a call to jump-start your motor. Visit an antique shop and chat with the people around you. Simple yet meaningful encounters may prove richly rewarding.",
    3: "You should enjoy the intense energy of today. The mud is finally beginning to clear away. Expose the truth in every issue and get ready for the gremlins that may be unEarthed. Connect with nature today and spend some time with animals if you can. Take deep breaths in fresh outdoor air and enjoy a long walk somewhere special with a close friend.",
    4: "Today marks the beginning of a new cycle for you. Collect and consolidate your recent ideas and focus them outwardly. The time is right for you to act. Improve your surroundings and adjust your bed so that it faces east/west. (A north/south placement aligns you with Earth's magnetic field and causes you to lose energy at night.) Drink plenty of water to keep your mind clear.",
    5: "Take a cold shower to jump-start yourself today. It's fine if you laze around a bit in the morning, but by evening, you should be working at full capacity. You will be called into action whether you want to be or not. Notice how active your dreams are tonight and over the next couple of nights. Messages are trying to get through, so listen",
    6: "Today may start out sluggish for you, but by the end of the day the energy will move fast and furious. Your thoughts will be buzzing around your head like bees around a hive. An introspective and contemplative morning has filled your brain with a new wave of thoughts, which you will be eager to share with anything that has ears tonight.",
    7: "Enjoy the calm morning, because things are going to get crazier and more energetic as the day goes on. Emotions will run high, and people will be more opinionated than usual. A conflict may arise from which you just want to extricate yourself. Realize that a more peaceful agreement will ensue if you jump in and add your two cents' worth.",
    8: "You will experience an intense amount of energy today. Your dream state will be more active than usual, and you will find that people are drawn to you like moths to light. Make sure you keep your fiery emotions in balance and don't cross any boundaries with others. People have limits, and it's important that you honor theirs as well as your own.",
    9: "It's time to get up and get moving. You have tremendous ideas and vision for the future. You have all the information you need. Now all you have to do is act. Step up to the plate and hit one over the fence. Getting out of your box and further into the world at large will do you a great deal of good. Get a greater perspective on things and enjoy time in a new environment.",
    10: "The early part of the day might find you sluggish and indecisive, but later you should be psyched up and ready to go. Today marks the beginning of a new period in which you should set your ideas in motion. Action is the key. Think before you speak and use caution when talking about other people. Make sure your discussions about others don't turn into gossip",
    11: "Today's energies will get progressively more intense as the day goes on. In the morning, you may be in an easygoing, dreamy state, but you will be itching to take action by nightfall. Take what you've learned from your sensitive, meditative state and share it with others. Use your inner calm to bring stability to stressful situations. Make sure things don't get out of hand tonight",
    12: "For the past several weeks you've felt like you've been dragging your heels. Decisions may have been hard to make and people may have seemed wishy-washy. There's a major energy shift tonight that will spark things back into action. Once again you will be on center stage. Be yourself and smile. Fun is a commodity you have in abundance. Share this incredible gift with others.",
}


// Listen for key events
document.querySelector(".date-input").addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".date-btn").click();
    }
});


// document.querySelector(".gen-horoscope").addEventListener("keyup", function(e) {
//     if(e.keyCode === 13) {
//         event.preventDefault();
//         document.querySelector(".gen-horoscope").click();
//     }
// });
//
//
// document.querySelector(".reset").addEventListener("keyup", function(e) {
//     if(e.keyCode === 13) {
//         event.preventDefault();
//         document.querySelector(".reset").click();
//     }
// });


// Listen for click events
document.querySelector(".date-btn").addEventListener("click", function() {
    if(checkInput() === 1) {
        fadeOutTransition(".date-section")
        fadeInTransition(".zodiac-section");
        setZodiac(isZodiac(getDate()));
        resetHoro();
    } else {
        document.querySelector(".error").innerText = "Please insert the month and the date of your birth in the input above";
        errorTransition()
    }
});


document.querySelector(".gen-horoscope").addEventListener("click", function() {
    fadeOutTransition(".zodiac-section");
    fadeInTransition(".horo-section");
    setHoro(genHoro());
})


document.querySelector(".reset").addEventListener("click", function(){
    fadeOutTransition(".horo-section");
    resetDate();
    fadeInTransition(".date-section");
    resetZodiac();
})


// Transitions
function fadeOutTransition(myClass) {
    document.querySelector(myClass).classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(myClass).classList.add("hidden");
        document.querySelector(myClass).classList.remove("fade-out");
    } , 2250)
}


function fadeInTransition(myClass) {
    document.querySelector(myClass).classList.add("fade-in");
    setTimeout(() => {
        document.querySelector(myClass).classList.remove("hidden");
    } , 2250)
    setTimeout(() => {
        document.querySelector(myClass).classList.remove("fade-in");
    } , 3750)
}


function errorTransition() {
    document.querySelector(".error").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".error").innerText = "";
        document.querySelector(".error").classList.remove("fade-out");
    } , 2250)
}


// Check and return dates
function checkInput() {
    const regex = /^\d{1,2}\/\d{1,2}$/i;  // Looks for pattern
    const dateInput = document.querySelector(".date-input").value;
    if(!isNaN(dateInput.slice(0, 2)) && dateInput[0] + dateInput[1] > 12) {
        return -1;
    } else {
        if(document.querySelector(".date-input").value.match(regex)) {
            return 1;
        } else {
            return -1;
        }
    }
}


function getDate() {
    let inputDate = parseDate(document.querySelector(".date-input").value);
    return inputDate;
}


function parseDate(input) {
    const inputArr = checkDate(input.split("/"));
    parsedInput = parseInt(inputArr.join(""), 10);
    return parsedInput;
}


function checkDate(arr) {
//Check if input is > 2
    if(arr[0].length === 2 && arr[1].length === 2) {
        return arr;
    } else {
        return checkDateFix(arr)
    }
}


function checkDateFix(arr) {
    if(arr[0].length !== 2) {
        arr[0] = "0" + arr[0];
    }
    if(arr[1].length !== 2) {
        arr[1] = "0" + arr[1];
    }
    return arr;
}


function resetDate() {
    document.querySelector(".date-input").value = "";
}


// Return Zodiac
function isZodiac(numberCode) {
    for(let i = 0; i < 14; i++) {
        if(numberCode >= Math.min(zodiacs[i].fromDate, zodiacs[i].toDate) && numberCode <= Math.max(zodiacs[i].fromDate, zodiacs[i].toDate)) {
            return [zodiacs[i].zodiac, zodiacs[i].img, zodiacs[i].alt];
        }
    }
}


function setZodiac(zodiacArr) {
    document.querySelector(".image").src = zodiacArr[1];
    document.querySelector(".image").alt = zodiacArr[2];
    document.querySelector(".zodiac").innerText = `${zodiacArr[0]}`;
}


function resetZodiac() {
    document.querySelector(".zodiac").innerText = "";
}


// Return horoscope
function genHoro() {
    let ranNum = Math.round((Math.random() * 11) + 1);
    return ranNum;
}


function setHoro(ranNum) {
    document.querySelector(".horoscope").innerText = `${readings[ranNum]}`;
}


function resetHoro() {
    document.querySelector(".horoscope").innerText = "";
}
