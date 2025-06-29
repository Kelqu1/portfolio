const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

const btn = document.getElementById('darkModeToggle');
btn.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    }
});

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  // Met à jour le texte du bouton
  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = "Activer le mode clair";
  } else {
    toggleButton.textContent = "Activer le mode sombre";
  }
});