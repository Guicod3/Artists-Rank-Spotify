const toggleButton = document.querySelector('button[data-collapse-toggle="navbar-default"]');
const navbarMenu = document.getElementById('navbar-default');

toggleButton.addEventListener('click', function() {
    console.log('aqui foi')
    const isHidden = navbarMenu.classList.contains('hidden');

    if (isHidden) {
        navbarMenu.classList.remove('hidden');
    } else {
        navbarMenu.classList.add('hidden');
    }

});




