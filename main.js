$(updateView)
const BASE_URL = "https://zagster-service.herokuapp.com"

function updateView(){
    $.getJSON(BASE_URL + "/rides/count" , updateRideCount)
}
//DOM
function updateRideCount(data){
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}


