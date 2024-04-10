function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetSectionId = navLink.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
        });
    });
});

function openMenu() {
    var menuButton = document.getElementById('menuButton');
    var navbarCollapse = document.getElementById('navbarNavAltMarkup');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
        menuButton.setAttribute('aria-expanded', 'false');
    } else {
        navbarCollapse.classList.add('show');
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuButton');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            openMenu();
        });
    }
});

function viewAllMenuItems() {
    alert('Viewing all menu items...');
}

document.addEventListener('DOMContentLoaded', function() {
    var viewAllButtons = document.querySelectorAll('.menu-item-link');
    viewAllButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            viewAllMenuItems();
        });
    });
});

function orderNow() {
    alert('Ordering now...');
}

document.addEventListener('DOMContentLoaded', function() {
    var orderNowButton = document.querySelector('.delivery-and-payment-section button');
    if (orderNowButton) {
        orderNowButton.addEventListener('click', function() {
            orderNow();
        });
    }
});

function redeemGift() {
    alert('Redeeming gift...');
}

document.addEventListener('DOMContentLoaded', function() {
    var redeemGiftButton = document.querySelector('.thanking-customers-section button');
    if (redeemGiftButton) {
        redeemGiftButton.addEventListener('click', function() {
            redeemGift();
        });
    }
});
