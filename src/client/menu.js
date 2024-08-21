const toggleButton = document.querySelector('button[data-collapse-toggle="navbar-default"]');
const navbarMenu = document.getElementById('navbar-default');

toggleButton.addEventListener('click', function() { //Abertura do menu em telas menores
    const isHidden = navbarMenu.classList.contains('hidden');

    if (isHidden) {
        navbarMenu.classList.remove('hidden');
    } else {
        navbarMenu.classList.add('hidden');
    }

});




