$(function() {
    if ($('#googleMap').length) {
        var iconMarker = '../images/location.png';
        var contact = {
            Lat: 12.246860,
            Lng: 109.194962,
            title: "Colina - Hotel, Resort & Accommodation",
            iconFrom: "../images/gps.png",
            iconTo: "../images/location.png"
        }
        var directionsDisplay = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        var center = new google.maps.LatLng(contact.Lat, contact.Lng);
        var directionsService = new google.maps.DirectionsService();
        //Khai bao cac thuoc tinh
        var mapProp = {
            center: center,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var mainMarker = new google.maps.Marker({
            position: center,
            Map: map,
            title: contact.title,
            animation: google.maps.Animation.DROP,
            icon: iconMarker
        })
        var info = new google.maps.InfoWindow({
            content: $('#contact-maps').html()
        });
        mainMarker.addListener('click', function() {
            info.open(map, mainMarker);
        })
        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('directionsPanel'));

        var input = $("#direction")[0];
        var autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.bindTo('bounds', map);

        var infowindow = new google.maps.InfoWindow();
        var marker = new google.maps.Marker({
            map: map,
            anchorPoint: new google.maps.Point(0, -29),
            animation: google.maps.Animation.BOUNCE,
        });
        $(input).keyup(function(e) {
            var event = e || window.event;
            var key = event.keyCode || event.which;
            key = String.fromCharCode(key);
            if (event.keyCode === 13) {
                event.returnValue = false;
                if (event.preventDefault)
                    event.preventDefault();
                return false;
            }
        });

        function calcRoute() {
            var start = input.value;
            var end = center;
            var request = {
                origin: start,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };
            directionsService.route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    directionsDisplay.setMap(map);
                }
            });
        }
        autocomplete.addListener('place_changed', function() {
            infowindow.close();
            marker.setVisible(false);
            var place = autocomplete.getPlace();
            if (!place.geometry) {
                return;
            }
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(20);
            }
            marker.setIcon(contact.iconFrom);
            mainMarker.setIcon(contact.iconTo);
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

            var address = '';
            if (place.address_components) {
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ].join(' ');
            }
            infowindow.setContent('<div style="line-height:1.35;overflow:hidden;white-space:nowrap;"><strong>' +
                input.value + '</strong><br/>' + address + '</div>');
            infowindow.open(map, marker);
            info.open(map, mainMarker);
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            })
            calcRoute();
        });
    }
});