document.addEventListener('DOMContentLoaded', () => {
    console.log("Olivia Smith Portfolio Loaded Successfully!");
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
