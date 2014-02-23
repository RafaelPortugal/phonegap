function openMenu() {
    container.classList.add('open-sidebar');
    is_open_menu = true
}

function closeMenu() {
    container.classList.remove('open-sidebar');
    is_open_menu = false
}
function show(elementID) {
    // var container = document.getElementsByClassName('container')[0];
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
        app.receivedEvent('deviceready');
        container = document.getElementsByClassName('container')[0];
        is_open_menu = false
        show('page1');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('sidebar-toggle').onclick = function() {
            if(!is_open_menu) { 
                openMenu();
            } else {
                closeMenu();
            }  
        }
        
        var transitions = document.getElementsByClassName("transition-page");
        for (var i = transitions.length - 1; i >= 0; i--) {
            transitions[i].onclick = function(){
                show(this.getAttribute("href"));
            };
        }
        $('body').on('swipeLeft', function(e){
            if (is_open_menu) {
                hideMenu();
            }

        });
        $('body').on('swipeLeft', function(e){
            if (!is_open_menu) {
                openMenu();
            }
        });

    }
};


