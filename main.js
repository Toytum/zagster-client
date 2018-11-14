$(updateView)
const BASE_URL = "https://zagster-service.herokuapp.com"

function updateView(){
    $.getJSON(BASE_URL + "/rides/count/columbia_simpson" , printData)
    $.getJSON(BASE_URL + "/rides/count/drake_park" , printData)
    $.getJSON(BASE_URL + "/rides/count/g5" , printData)
    $.getJSON(BASE_URL + "/rides/count/galveston" , printData)
    $.getJSON(BASE_URL + "/rides/count/grc" , printData)
    $.getJSON(BASE_URL + "/rides/count/old_mill" , printData)
    $.getJSON(BASE_URL + "/rides/count/osu_cascades" , printData)
    $.getJSON(BASE_URL + "/rides/count/ten_barrel" , printData)
}
//DOM
function updateRideCount(data){
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function printData(data){
    console.log(data)
}



