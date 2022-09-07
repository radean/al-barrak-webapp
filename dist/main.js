// Switches
var isOnline = true;
// =================

// Global Variable
var baseDomain = "/app/";
var serverDomain = "/";
var selectedServer = '';
if (isOnline) {
    selectedServer = serverDomain
}else{
    selectedServer = baseDomain
}
var host = window.location.protocol + "//" + window.location.host + selectedServer;
// alert (host);
$(window).on('load', function() { // makes sure the whole site is loaded
    //$('#status').fadeOut(); // will first fade out the loading animation
    //Adding Calendars
    // $('#customerShipmentReadyDateCalendar')
    //     .calendar({
    //         type: 'date'
    //     });
    // $('#customerShipmentDeliveryDateCalendar')
    //     .calendar({
    //         type: 'date'
    //     });
    $(function(){
        $('.submit').on('submit', function(event){
            event.preventDefault();
            // alert("Form Submission stopped.");
        });
    });
    //$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    //$('body').delay(350).css({'overflow':'visible'});
    // $('.ui.dropdown')
    //     .dropdown();
        // Form Validation Queries
        $('.ui.form')
        .form({
            fields: {
                name: {
                    identifier: 'fullName',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your Full name'
                        }
                    ]
                },
                email: {
                    identifier: 'email',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your email'
                        }
                    ]
                },
                phoneNumber: {
                    identifier: 'phoneNumber',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your Phone Number'
                        }
                    ]
                },
                company: {
                    identifier: 'company',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your company name'
                        }
                    ]
                },
                originZipCode: {
                    identifier: 'originZipCode',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your Origin Zip Code'
                        }
                    ]
                },
                shipmentReadyDate: {
                    identifier: 'shipmentReadyDate',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter your Shipment Ready Date'
                        }
                    ]
                },
                originAppointment: {
                    identifier: 'originAppointment',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please Select an "Yes" if you require Origin Appointment'
                        }
                    ]
                },
                destinationZipCode: {
                    identifier: 'destinationZipCode',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter destination zip code'
                        }
                    ]
                },
                requiredDeliveryDate: {
                    identifier: 'empty',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter the Delivery Date'
                        }
                    ]
                },
                destinationAppointment: {
                    identifier: 'destinationAppointment',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please Select an "Yes" if you require Destination Appointment'
                        }
                    ]
                },
                totalWeight: {
                    identifier: 'totalWeight',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter the total weight of your Shipment'
                        }
                    ]
                },
                freightClass: {
                    identifier: 'freightClass',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter the freight class'
                        }
                    ]
                },
                packageType: {
                    identifier: 'packageType',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter the package type'
                        }
                    ]
                },
                skills: {
                    identifier: 'skills',
                    rules: [
                        {
                            type   : 'minCount[2]',
                            prompt : 'Please select at least two skills'
                        }
                    ]
                },
                // palletLenght: 'empty',
                // palletWidth: 'empty',
                // palletHeight: 'empty',
                // palletQuantity : 'empty',
                // description: 'empty',
            },
            onSuccess: function(event, fields) {
                mainApp.Create();
                // console.log("Success Event Triggered")
                setTimeout(function(){
                    window.location.replace('https://absaco.com/thankyou.html');
                }, 5000);
                event.preventDefault();
            }
        });
})


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
//  Members Carousel
    $('.members-carousel').owlCarousel({
        responsive: {
            0: {
                items:2,
                autoplay: true,
                center: false,
                autoplayTimeout: 2500,
                loop:true,
                margin:20,
                nav:false,
                dots: false
            },
            600:{
                items:4,
                autoplay: true,
                center: false,
                autoplayTimeout: 2500,
                loop:true,
                margin:40,
                nav:false,
                dots: false
            }
        },
    });
//  Marquee Carousel
    $('.marquee-carousel').owlCarousel({
        responsive: {
            0: {
                items:2,
                autoplay: true,
                center: false,
                autoplayTimeout: 2500,
                loop:true,
                margin:20,
                nav:false,
                dots: false
            },
            600:{
                items:4,
                autoplay: true,
                center: false,
                autoplayTimeout: 2500,
                loop:true,
                margin:40,
                nav:false,
                dots: false
            }
        },
    });
//  MFL Marquee Carousel
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
                duration: 6000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        this.destroy();
    }, {offset: '90%'});
});

// main header object
var header = {};
var setAttribute = function(attributes){

};
// Add and remove attributes
header.AttributeManager = {
    // adding a new attribute
    addAttribute: function (id, url,size) {
        var newAttribute = document.createElement("link");
        newAttribute.setAttribute("rel", "icon");
        newAttribute.setAttribute("type", "image/png");
        newAttribute.setAttribute("href", url);
        newAttribute.setAttribute("sizes", size);
        document.getElementsByTagName("head")[0].appendChild(newAttribute);
    }
};

 $(document).ready(function() {
    
//          UI Initialize
$('#status').fadeOut(); // will first fade out the loading animation
$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
$('body').delay(350).css({'overflow':'visible'});

    $('#header').load(host + 'dist/temps/header.html', function () {
        // fix menu when passed
        // $('head').append(favicon);
        $('.ui.dropdown')
            .dropdown();
        // document.getElementsByTagName('head')[0].appendChild(favicon);
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
        // Select all links with hashes
        $('a').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
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
            //Google's Map
            var locations = [
                ['Headoffice', 26.432926, 50.124462],
                ['canada', 43.661502, -79.598483],
                ['singapore', 1.276032, 103.846189],
                ['india', 19.074973, 73.021136],
                ['dubai', 25.116253, 55.390241],
                ['iraq', 30.563378, 47.729758],
            ];
            // var Headoffice = {lat: 26.432926, lng: 50.124462};
            // var canada = {lat: 43.661502, lng: -79.598483};
            // var singapore = {lat: 1.276032, lng: 103.846189};
            // var india = {lat: 19.074973, lng: 73.021136};
            // var dubai = {lat: 25.116253, lng: 55.390241};
            // var iraq = {lat: 30.563378, lng: 47.729758};

            var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
            var icons = {
                office: {
                    icon: iconBase + 'map-icon-map-pin.png'
                }
            };

            var map = new google.maps.Map(document.getElementById('locationMap'), {
                zoom: 1,
                center: new google.maps.LatLng(26.432926, 67.729758),
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
            });

            // var marker = new google.maps.Marker({
            //     position: Headoffice,
            //     map: map,
            //     icon: {
            //         path: 'M15.938 32c0 0-9.938-14.062-9.938-20.062 0-11.813 9.938-11.938 9.938-11.938s10.062 0.125 10.062 11.875c0 6.187-10.062 20.125-10.062 20.125zM16 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z',
            //         fillColor: 'teal',
            //         fillOpacity: 1,
            //         strokeColor: 'teal',
            //         strokeWeight: 0
            //     },
            //     title: 'Our Office',
            // });

            for (i = 0; i < locations.length; i++) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                    map: map,
                    icon: {
                        path: 'M15.938 32c0 0-9.938-14.062-9.938-20.062 0-11.813 9.938-11.938 9.938-11.938s10.062 0.125 10.062 11.875c0 6.187-10.062 20.125-10.062 20.125zM16 6c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4z',
                        fillColor: 'teal',
                        fillOpacity: 1,
                        strokeColor: 'teal',
                        strokeWeight: 0
                    },
                });
            }
            ;
            // marker.setAnimation(google.maps.Animation.BOUNCE);
        });
//    MAIN ANCHOR SNIPPET

    });
 });
