var mobileMenu = document.getElementById("navbarSupportedContent");
window.addEventListener('click', function(e) {
    if (!document.getElementById('navbarSupportedContent').contains(e.target) && (!document.getElementById('menuButton').contains(e.target))) {
        if (mobileMenu.className === 'navbar-collapse collapse show') {
            mobileMenu.className = 'navbar-collapse collapse';
        }
    }
})