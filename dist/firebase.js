$(window).on('load', function() { // makes sure the whole site is loaded
    //Adding Calendars
    $('#customerShipmentReadyDateCalendar')
        .calendar({
            type: 'date'
        });
    $('#customerShipmentDeliveryDateCalendar')
        .calendar({
            type: 'date'
        });
});
// Generating Firebase Application
var app_firebase = {};
(function(){
    var config = {
        apiKey: "AIzaSyDxrmyrCJBGv7vTUfEssNe7nzBjJNZtqo8",
        authDomain: "absaquote-1373a.firebaseapp.com",
        databaseURL: "https://absaquote-1373a.firebaseio.com",
        projectId: "absaquote-1373a",
        storageBucket: "absaquote-1373a.appspot.com",
        messagingSenderId: "775092511234",
        appId: "1:775092511234:web:c82e3c54739a8db7"
    };
    firebase.initializeApp(config);

    app_firebase = firebase;

    function fnCreate( body, callback){
        if(!body || !callback) return;
        app_firebase.firestore().collection('quotationData').add(body).then(function(err){
            console.log(err);
        });
        // if(post) {
        //     mainApp.onSuccessPushed = true;
        // }
    }

    app_firebase.databaseApi = {
        create: fnCreate,
    }
})();

// Firebase Development
var mainApp = {};

(function(){
    var firebase = app_firebase;
    var uid = null;

    function messageHandler(err) {
        if(!!err){
            console.log(err)
        }else{
            console.log("Success");
        }
    }

    function UIDGenerator(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function bodyGenerated(){
        //Generating Body from HTML
        var data = {};

        var date = new Date;
        var uid = UIDGenerator(8);

        //Fetching Fields
        data['uid'] = uid; // Universal ID
        data['fullName'] = $('#customerName').val(); // Title
        data['email'] = $('#customerEmail').val(); // email
        data['phoneNumber'] = $('#customerPNumber').val(); // phone Number
        data['company'] = $('#customerCompany').val(); // company
        data['originZip'] = $('#customerOriginZip').val(); // origin Zip
        data['originAppointmentDate'] = $('#customerShipmentReadyDate').val(); // origin Appointment Date
        data['originAppointment'] = $('#customerOriginAppointment').val(); // origin Appointment
        data['destinationZip'] = $('#customerDestinationZip').val(); // destination Zip
        data['deliveryDate'] = $('#customerDeliveryDate').val(); // delivery Date
        data['destinationAppointment'] = $('#customerDestinationAppointment').val(); // destination Appointment
        data['totalWeight'] = $('#customerShipmentTotalWeight').val(); // total Weight
        data['freightClass'] = $('#customerShipmentFreightClass').val(); // Freight Class
        data['packageType'] = $('#customerShipmentPackageType').val(); // Package Type
        data['palletLenght'] = $('#customerShipmentPalletLenght').val(); // pallet Lenght
        data['palletWidth'] = $('#customerShipmentPalletWidth').val(); // pallet Width
        data['palletHeight'] = $('#customerShipmentPalletHeight').val(); // pallet Height
        data['palletQuantity'] = $('#customerShipmentPalletQuantity').val(); // Number of Pallets
        data['description'] = $('#customerShipmentDescription').val(); //Description
        data['date'] = firebase.firestore.FieldValue.serverTimestamp();
        console.log(data);
        return data
    }

    function fnCreate(){
        var data = bodyGenerated();
        var send = app_firebase.databaseApi.create(data, messageHandler);
    }

    mainApp.Create = fnCreate;
    mainApp.onSuccessPushed = false;
    mainApp.BodyGen = bodyGenerated;
})();