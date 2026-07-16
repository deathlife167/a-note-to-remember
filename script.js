const story = [
    "The first time I saw you, I greeted you with a 'salam'. Your sweet smile in return made my day.",
    "Ever since then, I used to wait impatiently for your classes. Seeing you walk into the room was pure joy.",
    "I even prayed to Allah that you would become our class teacher—and my prayer was answered!",
    "I get a little jealous when I see you with Tuba, but that's only because you are my favorite person.",
    "P.S. You're so beautiful, please keep smiling forever—it's my favorite view!"
];
let step = 0;

function start() {
    document.getElementById('main').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';
    document.getElementById('yt-player').src = "https://www.youtube.com/embed/9Q2xAfcl-RE?autoplay=1";
    
    for(let i=0; i<20; i++) {
        let s = document.createElement('div');
        s.className = 'sparkle';
        s.style.left = Math.random() * 100 + 'vw';
        s.style.animationDelay = Math.random() * 4 + 's';
        document.body.appendChild(s);
    }
    next();
}

function next() {
    if(step < story.length) {
        document.getElementById('next-btn').style.display = 'none';
        let i = 0; let el = document.getElementById('p-display'); el.innerHTML = "";
        function t() {
            if(i < story[step].length) { el.innerHTML += story[step].charAt(i); i++; setTimeout(t, 40); }
            else { document.getElementById('next-btn').style.display = 'inline-block'; }
        } t(); step++;
    } else { 
        document.getElementById('next-btn').style.display = 'none'; 
        document.getElementById('secret-btn').style.display = 'inline-block'; 
    }
}

function show() { 
    document.getElementById('secret-img').style.display = 'block'; 
    document.getElementById('secret-btn').style.display = 'none'; 
}
