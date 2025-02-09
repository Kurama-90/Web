function navigateweb(page) {
    // Ajoute "https://" si l'URL ne commence pas par "http://" ou "https://"
    if (!page.startsWith("http://") && !page.startsWith("https://")) {
        page = "https://" + page;
    }
    // Redirige vers la page
    window.location.href = page;
}



function navigateTo(url) {
    window.location.href = url; // Redirige l'utilisateur vers l'URL spécifiée
}

document.addEventListener("DOMContentLoaded", function () {
    let bootScreen = document.querySelector(".boot-screen");
    let aboutSection = document.querySelector(".about-me");
    
    // Simule un boot avant d'afficher la section About Me
    setTimeout(() => {
        bootScreen.classList.add("hide");
        aboutSection.style.display = "flex";
        
        // Effet de machine à écrire pour "About Me:"
        let text = "About Me:";
        let index = 0;
        let typingElement = document.querySelector(".typing");

        function typeWriter() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 170); // Délai pour l'effet
            } else {
                // Une fois l'animation terminée, on affiche le texte suivant
                let nextTextElement = document.querySelector(".next-text");
                setTimeout(() => {
                    nextTextElement.innerHTML = "I m an electromechanic based in Tunisia who loves Japanese anime, kickboxing, and new technologies. With diverse experience in international companies :<br><br>* Team Leader in Orthopedic Design for a Swiss company<br>* Industrial Painting Estimator for a French company<br>* Estimator in Metal Fabrication for a Canadian industrial group<br><br>In addition to my career, I enjoy programming and constantly experimenting with the latest technologies. I started with simple applications in VB.NET, then moved on to developing retro games in Unity 3D and C#, as well as batch scripting and automation. Over time, I explored more advanced areas such as:<br><br>* Custom SolidWorks API development for automated design<br>* VTK-based orthopedic visualization<br>* Web development and web applications<br>* Data scraping and data analysis<br>* Machine learning, AI, and LLMs for intelligent automation<br>* Building mini machines like CNC, 3D printer, and robotic arm<br><br>Driven by curiosity, I continuously explore new technologies and push the boundaries of innovation! 🚀<br><br>Menu :<br><br><span class=\"menu-option\" onclick=\"navigateTo('../index.html')\">Home page</span><br><br><span class=\"menu-option\" onclick=navigateweb(\'https://www.github.com/Kurama-90\')>Projects</span><br><br><span class=\"menu-option\" onclick=\"navigateTo('../Contact/Contact_me.html')\">Contact</span>"; // Remplacez ce texte par ce que vous voulez
                    nextTextElement.style.display = "block"; // Affiche le texte suivant
                }, 500); // Délai avant l'affichage du texte suivant
            }
        }

        typeWriter(); // Démarrer l'animation
    }, 3000); // Temps d'affichage du boot (2 sec)
});

