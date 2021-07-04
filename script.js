window.addEventListener('load', function() {
    let btn = document.querySelector('.statistika-btn');
    let dropdown = document.querySelector('.statistika-dropdown');
    let ar = document.querySelector('.statistika-arrow');
    btn.addEventListener('click', show)
    function show() {
        if (dropdown.classList.contains('show')) {
            ar.style.transform = 'none';
            dropdown.classList.remove('show');
            btn.classList.remove('show-btn');
        }
        else {
            dropdown.classList.add('show');
            ar.style.transform = 'rotateX(180deg)';
            btn.classList.add('show-btn');
        }
    } 
});