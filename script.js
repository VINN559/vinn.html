// script.js

// Function to toggle visibility of a section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.toggle('hidden'); // Toggle the 'hidden' class
    }
}

// Adding click event listeners to section headers
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('h2.cursor-pointer');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            const sectionId = header.parentElement.id; // Get the ID of the parent section
            toggleSection(sectionId);
        });
    });
});
