// Effet Matrix
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワ0123456789';
const fontSize = 10;
const columns = canvas.width / fontSize;

const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Effet de traînée
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // Réinitialiser la goutte
        }
        drops[i]++;
    }
}

setInterval(draw, 50); // Dessiner toutes les 50 ms

// Code de la terminal
const terminal = document.getElementById('terminal');
const input = document.getElementById('input');

const commands = [
    '<br>Welcome to the Matrix !<br> <br>Hi there, I m Mohamed Hamed.<br>I m from a technical background in electromechanics, with a passion for programming, specializing in data science, automation, open source, and web development. I love turning complex problems into elegant solutions through code. Let s build something amazing together! 🚀<br> <br>',
    'Programming Languages :<br>Python / JavaScript / VBA / C# / VB.NET<br> <br>Web Development :<br>HTML / PHP / CSS / Flask / FastAPI<br> <br>Automation & Tools :<br>Batch / Scripting / Excel / Macro / Git / GitHub',
    '<br>Menu :   <br><br><span class="menu-option" onclick="navigateTo(\'About/About_me.html\')">About me</span> <br><br> <span class="menu-option" onclick="navigateweb(\'https://github.com/Kurama-90?tab=repositories\')">Projects</span> <br><br> <span class="menu-option" onclick="navigateTo(\'Contact/Contact_me.html\')">Contact</span>',
    '<br>C:\\Users\\Utilisateur&gt; _'
];

let currentCommand = 0;

function typeCommand(command, index) {
    if (index < command.length) {
        input.innerHTML = command.substring(0, index) + '_';
        setTimeout(() => typeCommand(command, index + 1), 100); // 100 ms entre chaque caractère
    } else {
        // Une fois la commande tapée, afficher la réponse
        setTimeout(() => {
            terminal.innerHTML += `<p class="command">${commands[currentCommand]}</p>`;
            currentCommand++;
            if (currentCommand < commands.length) {
                setTimeout(() => {
                    typeCommand('C:\\Users\\Utilisateur&gt; ', 0);
                }, 0); // Pause avant de taper la prochaine commande
            }
        }, 0); // Pause avant d'afficher la réponse
    }
}

function navigateTo(page) {
    // Ici, vous pouvez rediriger vers la page souhaitée
    window.location.href = page;
}

function navigateweb(page) {
    // Ajoute "https://" si l'URL ne commence pas par "http://" ou "https://"
    if (!page.startsWith("http://") && !page.startsWith("https://")) {
        page = "https://" + page;
    }
    // Redirige vers la page
    window.location.href = page;
}

// Commencer à taper la première commande
typeCommand('Kurama-90.py ', 0);
