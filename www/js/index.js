function show(elementID) {
    var container = document.getElementsByClassName('container')[0];
    var element = document.getElementById(elementID.replace('#', ''));
    if (!element) {
        alert("Pagina não encontrada");
        return;
    }
    var pages = document.getElementsByClassName('show-page');
    for (var i = pages.length - 1; i >= 0; i--) {
        pages[i].classList.remove('show-page');
    };
    container.classList.remove('open-sidebar');
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
        show('page1');
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        document.getElementById('sidebar-toggle').onclick = function() {
            container = document.getElementsByClassName('container')[0];
            if(window.getComputedStyle(container).getPropertyValue('left') == '0px') 
            { 
                container.classList.add('open-sidebar');
            } else {
                container.classList.remove('open-sidebar');
            }  
        }
        
        var transitions = document.getElementsByClassName("transition-page");
        for (var i = transitions.length - 1; i >= 0; i--) {
            transitions[i].onclick = function(){
                show(this.getAttribute("href"));
            };
        }
    }
};


