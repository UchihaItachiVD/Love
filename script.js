let music = document.getElementById('background-music');
let images = document.querySelectorAll('.love-image');
let currentIndex = 0;
let contentPaused = true; // Start with content paused
let heartContainer = document.getElementById('heart-container');
let messagesContainer = document.getElementById('messages');
let texts = [
    "I love you bachaaa sorry itna din se pyaar nhi karne k liye.",
    "You are my sunshine , Our love is forever.",
    "hum log k beech bekar ka misunderstanding ho rha hai shayad door hai ek dusre se isliye.",
    "You mean the world to me , With you, every moment is special.",
    "tum toh mera baat nhi manta hai na isliye sab kharab hone lagta hai , man liya kro.",
    "You complete me in every way , I'm grateful for your love.",
    "hm dono ka future hai sath me baby , tumko abhi sath dena hoga na giveup se nhi chalega aur same hmko bhi.",
    "You are the light of my life , Your smile warms my heart.",
    "ek baar woh sara baat clear ho jayega baat acha se ho jayega toh uske baad kabhi problem nhi aayega baby.",
    " I cherish every moment with you , Our love is a beautiful journey.",
    "hm bas ye chahta hai woh sara baat mera man me na aaye aur khatam ho jaye taaki hmlog ka aur theeek se chal sake .",
    "You are my one and only , You make life more beautiful.",
    "i love you bachaa , i love you so much jhagra karke acha nhi lagta hai sach me .",
    "You are my soulmate , I love you more each day.",
    "hm log ka jhagra hone se jo dusra baat sab hota hai woh share he nhi hota hai...aur ye bahut galat hai .",
    "You are the music to my soul , Our love is pure and true.",
    "sath rehna hai baby , tumko khona afford nhi kar sakta hai jo bhi ho jaye rehna hai.",
    "My love for you knows no bounds , You are the best thing in my life.",
    "i am so sorry baby hm pyaar karta hai tumse bhaut jayada lekin ye kuch  din kharab ho rha tha bas .",
    "You are my forever love , I am blessed to have you."
    // Add more texts as needed
];

document.getElementById('love-button').addEventListener('click', function() {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.style.display = 'block';

    music.play();

    // Show and animate messages immediately
    contentPaused = false; // Allow content to play
    updateMessage();
    animateImages();
    animateHearts();
});

document.getElementById('stop-button').addEventListener('click', function() {
    music.pause();
    music.currentTime = 0;
    contentPaused = true; // Pause content if Stop button is pressed
    clearTexts();
    hideImages(); // Hide images when the Stop button is pressed
    clearHearts();
});

function updateMessage() {
    messagesContainer.style.display = 'block'; // Show messages
    let textIndex = 0;

    function showNextMessage() {
        if (!contentPaused) {
            messagesContainer.innerHTML = texts[textIndex];
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(showNextMessage, 15000); // Change text every 15 seconds
        }
    }

    showNextMessage();
}

function animateImages() {
    if (!contentPaused) {
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        // Hide all images
        hideImages();

        const currentImage = images[currentIndex];
        currentImage.style.display = 'block';

        setTimeout(() => {
            currentImage.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            currentImage.style.opacity = '0';
            currentIndex++;
            animateImages();
        }, 15000); // Pause for 15 seconds before changing image
    } else {
        setTimeout(() => {
            animateImages(); // Retry after 1 second if content is paused
        }, 1000);
    }
}

function hideImages() {
    images.forEach(image => {
        image.style.display = 'none';
    });
}

function animateHearts() {
    setInterval(() => {
        createHeart();
    }, 200);
}

function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    document.getElementById('image-container').appendChild(heart);

    setTimeout(() => {
        heart.style.transition = 'transform 3s ease-in-out';
        heart.style.transform = 'translateY(100vh)';
    }, 0);

    setTimeout(() => {
        heart.remove();
    }, 3000); // Adjust the time here if needed
}

function clearTexts() {
    messagesContainer.innerHTML = "";
    messagesContainer.style.display = 'none'; // Hide messages
}

function clearHearts() {
    heartContainer.innerHTML = "";
}
