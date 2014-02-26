function openMenu() {
    body.classList.add('opened');
    nav.classList.add('opened');
    is_open_menu = true;
}

function closeMenu() {
    body.classList.remove('opened');
    nav.classList.remove('opened');
    is_open_menu = false;
}
function show(elementID) {
    var element = document.getElementById(elementID.replace('#', ''));
    if (!element) {
        alert("Pagina não encontrada");
        return;
    }
    var pages = document.getElementsByClassName('show-page');
    for (var i = pages.length - 1; i >= 0; i--) {
        pages[i].classList.remove('show-page');
    };
    closeMenu();
    element.classList.add('show-page');
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        is_open_menu = false;
        body = document.body
        nav = document.getElementById('nav-left');
        transitions = document.getElementsByClassName("transition-page");
        show('page1');
        app.receivedEvent('deviceready');
        if (window.localStorage.getItem('language')){
            alert("Salvou o language");
        }else {
            alert("Não tinha language");
            window.localStorage.setItem('language', 1);
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('sidebar-toggle').onclick = function() {
            if(!is_open_menu) { 
                openMenu();
            } else {
               closeMenu();
            }  
            return false
        }
        for (var i = transitions.length - 1; i >= 0; i--) {
            transitions[i].onclick = function(e){
                show(this.getAttribute("href"));
                e.preventDefault();
            };
        }
        Hammer(body).on("swipeleft", function() {
            alert('Left');
            if (is_open_menu) {
                closeMenu();
            }
        });
        Hammer(body).on("swiperight", function() {
            alert('Right');
            if (!is_open_menu) {
                openMenu();
            }
        });

    }
};


