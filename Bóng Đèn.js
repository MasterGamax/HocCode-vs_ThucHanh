document.addEventListener('DOMContentLoaded', function () {
    const switchInput = document.querySelector('.switch');

    switchInput.addEventListener('change', function () {
        const lampBefore = document.querySelector('.lamp::before');

        if (this.checked) {
            lampBefore.style.background = '#ffffff';
            lampBefore.style.boxShadow = '0px 2px 10px #ffffffcc, 0px 5px 50px, 0px 8px 80px #ffffff99, 0px 8px 120px #ffffff99';
        } else {
            lampBefore.style.background = '#ffffff08';
            lampBefore.style.boxShadow = 'inset 2px -2px 10px #ffffff12';
        }
    });
});
