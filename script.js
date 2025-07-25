// Récupère le bouton de changement de mode et le body
const btn = document.getElementById('darkModeToggle');
const body = document.body;

// Ajoute un écouteur d'événement sur le bouton pour changer de mode
btn.addEventListener('click', () => {
    // Si le mode sombre est activé, on passe en mode clair
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        btn.textContent = "🌙"; // Change le texte du bouton
    } else {
        // Sinon, on passe en mode sombre
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        btn.textContent = "☀️"; // Change le texte du bouton
    }
    updateGithubLogo(); // Met à jour le logo GitHub selon le mode
});

// Fonction pour changer le logo GitHub selon le mode
function updateGithubLogo() {
    const githubLogo = document.getElementById('github');
    // Si le mode sombre est activé, on met le logo sombre
    if (body.classList.contains('dark-mode')) {
        githubLogo.src = "assets/githubdarkmode.png";
    } else {
        // Sinon, on met le logo clair
        githubLogo.src = "assets/GitHublightmode.png";
    }
}

// Met à jour le logo au chargement de la page
updateGithubLogo();