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

var ctx = document.getElementById("polarChart");
var polarChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

}
//DOM
function updateRideCount(data){
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}

function printData(data){
    console.log(data)
}

