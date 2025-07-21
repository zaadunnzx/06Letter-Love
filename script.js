// Love-o-Meter functionality
let currentLove = 0;
const maxLove = 100;

function increaseLove() {
    if (currentLove < maxLove) {
        currentLove += Math.floor(Math.random() * 15) + 5; // Random increase between 5-20
        if (currentLove > maxLove) currentLove = maxLove;
        
        const meter = document.getElementById('loveMeter');
        const percentage = document.getElementById('lovePercentage');
        
        meter.style.width = currentLove + '%';
        percentage.textContent = currentLove;
        
        // Add some visual feedback
        const button = document.querySelector('.love-button');
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
        
        // Show special message when reaching 100%
        if (currentLove === maxLove) {
            setTimeout(() => {
                alert('💖 WOW! Level bucin sudah maksimal! Zulpa pasti bahagia banget! 💖');
            }, 500);
        }
    } else {
        // Reset if already at max
        currentLove = 0;
        document.getElementById('loveMeter').style.width = '0%';
        document.getElementById('lovePercentage').textContent = '0';
    }
}

// Romantic messages array
const loveMessages = [
    "Kamu itu seperti WiFi, bikin aku selalu terhubung sama kebahagiaan! 📶💕",
    "Kalau cinta itu crime, aku rela dipenjara seumur hidup sama kamu! 🚔💖",
    "Kamu tau gak? Mata kamu itu lebih indah dari semua bintang di langit! ⭐✨",
    "Setiap detik tanpa kamu rasanya kayak loading yang gak pernah selesai! ⏰💕",
    "Kamu itu vitamin C untuk hidupku - bikin sehat dan bahagia terus! 🍊💊",
    "Kalau kamu battery, aku gak akan pernah mau di-charge yang lain! 🔋💖",
    "Senyum kamu itu antivirus terbaik buat bad mood aku! 😊💻",
    "Kamu itu Google-nya hidup aku, selalu punya jawaban untuk semuanya! 🔍💕",
    "Dengan kamu, setiap hari rasanya weekend! 📅✨",
    "Kamu itu trending topic di hati aku setiap hari! #ZulpaCantik 💖📱",
    "Kalau hidup ini game, kamu itu achievement paling berharga! 🏆💕",
    "Kamu itu password yang selalu aku inget, gak pernah lupa! 🔐💖",
    "Dengan kamu, mood aku selalu airplane mode - terbang tinggi! ✈️💕",
    "Kamu itu notification favorite aku, selalu bikin seneng! 📲💖",
    "Kalau cinta bisa di-screenshot, gallery aku udah penuh sama kamu! 📸💕"
];

let currentMessageIndex = -1;

function showRandomMessage() {
    // Get random message that's different from current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * loveMessages.length);
    } while (newIndex === currentMessageIndex && loveMessages.length > 1);
    
    currentMessageIndex = newIndex;
    const messageContainer = document.getElementById('messageContainer');
    
    // Add fade out effect
    messageContainer.style.opacity = '0';
    messageContainer.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
        messageContainer.innerHTML = `<div class="message">${loveMessages[currentMessageIndex]}</div>`;
        messageContainer.style.opacity = '1';
        messageContainer.style.transform = 'scale(1)';
    }, 300);
}

// Floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = '2rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.opacity = '0.7';
    
    document.body.appendChild(heart);
    
    // Animate heart floating up
    let position = window.innerHeight;
    const float = setInterval(() => {
        position -= 2;
        heart.style.top = position + 'px';
        heart.style.transform = `rotate(${Math.sin(position * 0.01) * 10}deg)`;
        
        if (position < -100) {
            clearInterval(float);
            document.body.removeChild(heart);
        }
    }, 50);
}

// Sparkle effect on hover
function addSparkleEffect() {
    const cards = document.querySelectorAll('.reason-card, .photo-placeholder');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Create sparkle elements
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.innerHTML = '✨';
                    sparkle.style.position = 'absolute';
                    sparkle.style.pointerEvents = 'none';
                    sparkle.style.fontSize = '1rem';
                    sparkle.style.zIndex = '1000';
                    
                    const rect = this.getBoundingClientRect();
                    sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
                    sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
                    
                    document.body.appendChild(sparkle);
                    
                    // Animate sparkle
                    let opacity = 1;
                    let scale = 1;
                    const animate = setInterval(() => {
                        opacity -= 0.05;
                        scale += 0.1;
                        sparkle.style.opacity = opacity;
                        sparkle.style.transform = `scale(${scale})`;
                        
                        if (opacity <= 0) {
                            clearInterval(animate);
                            document.body.removeChild(sparkle);
                        }
                    }, 50);
                }, i * 100);
            }
        });
    });
}

// Typewriter effect for title
function typewriterEffect() {
    const title = document.querySelector('.title');
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        title.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(typing);
        }
    }, 100);
}

// Smooth scrolling for better experience
function smoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Love confession popup
function showLoveConfession() {
    const confessions = [
        "Tau gak? Kamu itu alasan aku senyum setiap hari! 😊💕",
        "Aku bersyukur banget bisa kenal sama kamu, Zulpa! 🙏💖",
        "Setiap hari sama kamu itu kayak mimpi yang jadi kenyataan! ✨💕",
        "Kamu itu yang terbaik yang pernah terjadi di hidup aku! 💖🌟",
        "I love you to the moon and back, Zulpa sayang! 🌙💕"
    ];
    
    const randomConfession = confessions[Math.floor(Math.random() * confessions.length)];
    
    // Create popup
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b6b, #ee5a52);
        color: white;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        text-align: center;
        font-size: 1.2rem;
        max-width: 400px;
        animation: popupAppear 0.5s ease;
    `;
    
    popup.innerHTML = `
        <div>${randomConfession}</div>
        <button onclick="this.parentElement.remove()" style="
            background: white;
            color: #ff6b6b;
            border: none;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 20px;
            cursor: pointer;
            font-weight: 600;
        ">💖 Aww, manis banget!</button>
    `;
    
    document.body.appendChild(popup);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (popup.parentElement) {
            popup.remove();
        }
    }, 5000);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling
    smoothScroll();
    
    // Add sparkle effects
    addSparkleEffect();
    
    // Show initial message
    showRandomMessage();
    
    // Create floating hearts periodically
    setInterval(createFloatingHeart, 3000);
    
    // Show love confession popup after 10 seconds
    setTimeout(showLoveConfession, 10000);
    
    // Add click events to heart emojis for surprise
    document.querySelectorAll('.heart, .emoji').forEach(element => {
        element.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            this.style.transition = 'transform 0.5s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 500);
        });
    });
    
    // Add keyboard shortcuts for fun
    document.addEventListener('keydown', function(e) {
        if (e.key === 'l' || e.key === 'L') {
            increaseLove();
        }
        if (e.key === 'm' || e.key === 'M') {
            showRandomMessage();
        }
        if (e.key === 'h' || e.key === 'H') {
            createFloatingHeart();
        }
    });
    
    // Add Easter egg - double click on title
    document.querySelector('.title').addEventListener('dblclick', function() {
        alert('💕 Double click detected! Extra love untuk Zulpa! 💕');
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createFloatingHeart(), i * 200);
        }
    });
});

// Secret konami code for extra surprise
let konamiCode = [];
const correctCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    if (konamiCode.length > correctCode.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(correctCode)) {
        alert('🎉 Secret code activated! Extra bucin mode ON! 🎉');
        document.body.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52, #ff8e53, #4ecdc4, #45b7d1)';
        document.body.style.backgroundSize = '400% 400%';
        document.body.style.animation = 'rainbowBackground 3s ease infinite';
        
        // Add CSS for rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbowBackground {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
        `;
        document.head.appendChild(style);
        
        // Reset after 10 seconds
        setTimeout(() => {
            location.reload();
        }, 10000);
    }
});

// Add some fun click effects
document.addEventListener('click', function(e) {
    // Create a ripple effect
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 107, 107, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        z-index: 9999;
        width: 20px;
        height: 20px;
        left: ${e.clientX - 10}px;
        top: ${e.clientY - 10}px;
    `;
    
    // Add ripple animation if not exists
    if (!document.querySelector('#ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});
