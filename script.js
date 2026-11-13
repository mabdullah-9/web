document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.getElementById('saveBtn');

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            if (saveBtn.classList.contains('saved')) {
                saveBtn.innerText = 'Save';
                saveBtn.style.backgroundColor = '#e60023';
                saveBtn.classList.remove('saved');
            } else {
                saveBtn.innerText = 'Saved';
                saveBtn.style.backgroundColor = '#111111';
                saveBtn.classList.add('saved');
            }
        });
    }
});