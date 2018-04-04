window.onload = function () {

    $("#btnmap").on("click", function () {
        initMap();
    });
};

function initMap() {
    var userHome = {
        lat: -37.3159,
        lng: 81.1496
    };
    var map = new google.maps.Map(document.getElementById("maps"), {
        zoom: 4,
        center: userHome
    });

    var marker = new google.maps.Marker({
        position: userHome,
        map: map
    })

}