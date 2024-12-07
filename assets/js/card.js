// Load course cards templates
document.addEventListener('DOMContentLoaded', () => {
    // Language cards
    loadTemplate('components/cards/en-card.html', 'en-crd-template', 'lang-crds');
    loadTemplate('components/cards/ielts-card.html', 'ielts-crd-template', 'lang-crds');
    loadTemplate('components/cards/ibt-card.html', 'ibt-crd-template', 'lang-crds');
    loadTemplate('components/cards/du-card.html', 'du-crd-template', 'lang-crds');
    loadTemplate('components/cards/en-kids-card.html', 'en-kids-crd-template', 'lang-crds');
    loadTemplate('components/cards/fr-card.html', 'fr-crd-template', 'lang-crds');

    // Computer Science cards
    loadTemplate('components/cards/icdl-card.html', 'icdl-crd-template', 'cs-crds');
    loadTemplate('components/cards/ph-card.html', 'ph-crd-template', 'cs-crds');
    loadTemplate('components/cards/il-card.html', 'il-crd-template', 'cs-crds');
    loadTemplate('components/cards/cad-card.html', 'cad-crd-template', 'cs-crds');
    loadTemplate('components/cards/fe-card.html', 'fe-crd-template', 'cs-crds');
    loadTemplate('components/cards/py-card.html', 'py-crd-template', 'cs-crds');
    loadTemplate('components/cards/dj-card.html', 'dj-crd-template', 'cs-crds');
    loadTemplate('components/cards/pfa-card.html', 'pfa-crd-template', 'cs-crds');

});

function displaySection(clickedButton, sectionId) {
    const fButtons = document.querySelectorAll('.f-button');
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    fButtons.forEach(button => {
        button.style.backgroundColor = '#F2F2F2';
        button.style.color = '#222';
    });

    fButtons.forEach(button => {
        if (button === clickedButton) {
            clickedButton.style.backgroundColor = '#007DC5';
            clickedButton.style.color = '#FFF';
        }
    });
}


function showAllSections(clickedButton, sectionId) {
    const fButtons = document.querySelectorAll('.f-button');
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        section.style.display = 'block';
    });

    fButtons.forEach(button => {
        button.style.backgroundColor = '#F2F2F2';
        button.style.color = '#222';
    });

    fButtons.forEach(button => {
        if (button === clickedButton) {
            clickedButton.style.backgroundColor = '#007DC5';
            clickedButton.style.color = '#FFF';
        }
    });
}
