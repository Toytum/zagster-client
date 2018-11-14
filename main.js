$(updateView)
const BASE_URL = "https://zagster-service.herokuapp.com"

function updateView(){
    $.getJSON(BASE_URL + "/rides/count/columbia_simpson" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/drake_park" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/g5" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/galveston" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/grc" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/old_mill" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/osu_cascades" , updateRideCount)
    $.getJSON(BASE_URL + "/rides/count/ten_barrel" , updateRideCount)
}
//DOM
function updateRideCount(data){
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}


