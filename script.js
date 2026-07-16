const story = [
    "The first time I saw you, I greeted you with a 'salam'. Your sweet smile in return made my day. It was a moment I'll never forget—your kindness touched my heart in ways I couldn't express then.",
    "Ever since then, I used to wait impatiently for your classes. Seeing you walk into the room was pure joy. Every lecture became special just because you were there, making everything feel meaningful and worthwhile.",
    "I even prayed to Allah that you would become our class teacher—and my prayer was answered! It felt like a dream come true. Your presence transformed our classroom into a place of learning, warmth, and inspiration.",
    "I get a little jealous when I see you with Tuba, but that's only because you are my favorite person. Your smile, your kindness, your wisdom—everything about you is remarkable and inspiring to everyone around you.",
    "You inspire me to be better every single day. Your dedication to teaching shows how much you care about each of your students. Thank you for being an amazing teacher and an even better person. You deserve the world.",
    "P.S. You're so beautiful, please keep smiling forever—it's my favorite view! Your smile brightens everyone's day. Never stop being the wonderful person you are. You deserve all the happiness and love in the world. 💜"
];

let step = 0;
let isTyping = false;

// Visit Counter
window.addEventListener('load', function() {
    let visits = localStorage.getItem('visitCount');
    if (visits === null) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    localStorage.setItem('visitCount', visits);
    document.getElementById('visit-count').textContent = visits;
});

function start() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';
    
    // Play YouTube music with proper autoplay
    setTimeout(() => {
        const ytPlayer = document.getElementById('yt-player');
        ytPlayer.src = "https://www.youtube.com/embed/9Q2xAfcl-RE?autoplay=1&mute=0";
    }, 200);
    
    // Create falling sparkles
    for(let i = 0; i < 40; i++) {
        let s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.animationDelay = Math.random() * 4 + 's';
        document.body.appendChild(s);
    }
    
    // Add floating emoji hearts
    createFloatingHearts();
    
    next();
}

function next() {
    if(isTyping) return; // Prevent multiple clicks while typing
    
    if(step < story.length) {
        document.getElementById('next-btn').style.display = 'none';
        let i = 0; 
        let el = document.getElementById('p-display'); 
        el.innerHTML = "";
        isTyping = true;
        
        function typeText() {
            if(i < story[step].length) { 
                el.innerHTML += story[step].charAt(i); 
                i++; 
                // Fast typing speed for smooth experience
                setTimeout(typeText, 25); 
            }
            else { 
                isTyping = false;
                document.getElementById('next-btn').style.display = 'inline-block';
                updateProgressBar();
            }
        } 
        typeText(); 
        step++;
    } else { 
        document.getElementById('next-btn').style.display = 'none'; 
        document.getElementById('secret-btn').style.display = 'inline-block'; 
    }
}

function show() { 
    // Trigger Confetti
    createConfetti();
    
    // Show image container
    const imageContainer = document.getElementById('image-container');
    imageContainer.style.display = 'block';
    
    // Create beautiful canvas with message
    createMessageCanvas();
    
    // Hide the button
    document.getElementById('secret-btn').style.display = 'none';
}

function createMessageCanvas() {
    const canvas = document.getElementById('secret-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = 600;
    canvas.height = 700;
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#f4e1f7');
    gradient.addColorStop(1, '#d1c4e9');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add decorative hearts and emojis
    ctx.font = 'bold 40px Poppins, Arial';
    ctx.textAlign = 'center';
    
    // Top decoration
    ctx.fillText('💜 ✨ 💕', canvas.width / 2, 60);
    
    // Title
    ctx.font = 'bold 32px Poppins, Arial';
    ctx.fillStyle = '#6a1b9a';
    ctx.fillText('My Unsent Message', canvas.width / 2, 120);
    
    // Divider
    ctx.strokeStyle = '#9932CC';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(canvas.width - 50, 140);
    ctx.stroke();
    
    // Main message with proper word wrapping
    ctx.font = 'italic 18px Poppins, Arial';
    ctx.fillStyle = '#4a148c';
    
    const message = "Disti mahh I lovee youh...\nI justt wanna talk with you.\nTalk with you until all the\nmoments of waiting are erased.\nMake me yours.\nWhen you will be mine,\nI will hold you close\nand take a deep breath.\nI will hold you until\nall the moments of waiting\nare erased !!!";
    
    const lines = message.split('\n');
    let yPosition = 200;
    
    lines.forEach(line => {
        ctx.fillText(line, canvas.width / 2, yPosition);
        yPosition += 35;
    });
    
    // Bottom decoration
    ctx.font = 'bold 28px Poppins, Arial';
    ctx.fillText('💜 ✨ 💕', canvas.width / 2, canvas.height - 60);
    
    // Add glow effect
    const canvasContainer = document.getElementById('image-container');
    canvasContainer.style.boxShadow = '0 0 40px rgba(233, 30, 99, 0.7)';
    
    // Animation
    canvas.style.animation = 'fadeIn 0.8s ease-out';
}

function updateProgressBar() {
    let progress = (step / story.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Enhanced Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FF00FF', '#8B008B', '#9932CC', '#E91E63', '#C2185B'];
    
    for(let i = 0; i < 80; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.8 + 's';
        
        // Random size for variety
        const size = Math.random() * 8 + 5;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        confettiContainer.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 3500);
    }
}

// Create floating emoji hearts
function createFloatingHearts() {
    const container = document.getElementById('story-section');
    const emojis = ['💜', '💕', '✨', '🌸'];
    
    for(let i = 0; i < 15; i++) {
        setTimeout(() => {
            let heart = document.createElement('div');
            heart.className = 'floating-emoji';
            heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }, i * 300);
    }
}
