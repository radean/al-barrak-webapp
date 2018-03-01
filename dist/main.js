
// Global Variable
var baseDomain = "https://git a";
var host = window.location.protocol + "//" + window.location.host + "/";
// alert (host);
$.getScript( host + "dist/parallax.min.js", function (){
    // After load
});
$.getScript(host + "dist/aos.js", function (){
    AOS.init();
});
$.getScript(host + "dist/owl.carousel.js", function (){
    $('.main-carousel').owlCarousel({
        items:1,
        autoplay: true,
        autoplayTimeout: 3500,
        loop:true,
        margin:0,
        nav:false,
        dots: false

    });
//            Members Carousel
    $('.members-carousel').owlCarousel({
        items:4,
        autoplay: true,
        center: false,
        autoplayTimeout: 2500,
        loop:true,
        margin:40,
        nav:false,
        dots: false

    });
    $('.ui.accordion')
        .accordion()
});
$.getScript(host + "dist/jquery.waypoints.js", function (){
    $('#counters').waypoint( function () {
        console.log('clicks')
//            Removing TextHidden Class
        $('.count').removeClass('textHidden')
//            Animated Counter
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 5000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        this.destroy();
    }, {offset: '90%'});
});




$(document).ready(function() {
//          UI Initialize

    $('#header').load(host + 'dist/temps/header.html', function () {
        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            });;
        // Select all links with hashes
        $('a').click(function(){
            $('html, body').animate({
                scrollTop: $( $(this).attr('href') ).offset().top
            }, 500);
            return false;
        });
    });
//            Navigation bar
    $('#sideBar').load(host + 'dist/temps/sideBar.html', function () {
        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
    });
//            Footer
    $('#footer').load(host + 'dist/temps/footer.html', function () {
        // Google Maps
        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAHeG6ZvA8UpuRWiufliGCw6yiRqD_15PE", function () {
            <!--Google's Map-->
            var Headoffice = {lat: 26.435532, lng: 50.128851};
            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var icons = {
                office: {
                    icon: iconBase + 'map-icon-map-pin.png'
                }
            };
            var map = new google.maps.Map(document.getElementById('locationMap'), {
                zoom: 11,
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e9e9e9"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dedede"
                            },
                            {
                                "lightness": 21
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#ffffff"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "saturation": 36
                            },
                            {
                                "color": "#333333"
                            },
                            {
                                "lightness": 40
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#fefefe"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    }
                ],
                center: Headoffice
            });
            var marker = new google.maps.Marker({
                position: Headoffice,
                map: map,
                icon: {
                    path: 'M15.938 32c0 0-9.938-14.062-9.938-20.062 0-11.813 9.938-11.938 9.938-11.938s10.062 0.125 10.062 11.875c0 6.187-10.062 20.125-10.062 20.125zM16 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z',
                    fillColor: 'teal',
                    fillOpacity: 1,
                    strokeColor: 'teal',
                    strokeWeight: 0
                },
                title: 'Our Office',
            });
            marker.setAnimation(google.maps.Animation.BOUNCE);
        });
    });
//    MAIN ANCHOR SNIPPET

})