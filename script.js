const story = [
    "The first time I saw you, I greeted you with a 'salam'. Your sweet smile in return made my day.",
    "Ever since then, I used to wait impatiently for your classes. Seeing you walk into the room was pure joy.",
    "I even prayed to Allah that you would become our class teacher—and my prayer was answered!",
    "I get a little jealous when I see you with Tuba, but that's only because you are my favorite person.",
    "P.S. You're so beautiful, please keep smiling forever—it's my favorite view!"
];

let step = 0;

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
    document.getElementById('yt-player').src = "https://www.youtube.com/embed/9Q2xAfcl-RE?autoplay=1";
    
    // Create falling sparkles
    for(let i = 0; i < 30; i++) {
        let s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.animationDelay = Math.random() * 4 + 's';
        document.body.appendChild(s);
    }
    
    // Play background music
    playBackgroundMusic();
    
    next();
}

function next() {
    if(step < story.length) {
        document.getElementById('next-btn').style.display = 'none';
        let i = 0; 
        let el = document.getElementById('p-display'); 
        el.innerHTML = "";
        
        function t() {
            if(i < story[step].length) { 
                el.innerHTML += story[step].charAt(i); 
                i++; 
                setTimeout(t, 40); 
            }
            else { 
                document.getElementById('next-btn').style.display = 'inline-block';
                updateProgressBar();
            }
        } 
        t(); 
        step++;
    } else { 
        document.getElementById('next-btn').style.display = 'none'; 
        document.getElementById('secret-btn').style.display = 'inline-block'; 
    }
}

function show() { 
    // Trigger Confetti
    createConfetti();
    
    // Show image
    document.getElementById('secret-img').style.display = 'block';
    document.getElementById('secret-btn').style.display = 'none';
    
    // Pulse animation
    document.getElementById('secret-img').style.animation = 'pulse 0.6s ease-out';
}

function updateProgressBar() {
    let progress = (step / story.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#FF00FF', '#8B008B', '#9932CC'];
    
    for(let i = 0; i < 50; i++) {
        let confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confettiContainer.appendChild(confetti);
        
        // Remove after animation
        setTimeout(() => confetti.remove(), 3000);
    }
}

function playBackgroundMusic() {
    // Optional: Add subtle sound if you want
    // You can add sound effect code here
}
