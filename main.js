$(updateView)
const BASE_URL = "https://zagster-service.herokuapp.com"

var stationData = [];
var stationColSimpson;
var stationDrakePark;
var stationG5;
var stationGalveston;
var stationGrc;
var stationOldMill;
var stationOsuCascades;
var stationTenBarrel;

function updateView(){
    createGraph();
  $.when(
    $.getJSON(BASE_URL + "/rides/count/columbia_simpson" , updateColSimpson),
    $.getJSON(BASE_URL + "/rides/count/drake_park" , updateDrakePark),
    $.getJSON(BASE_URL + "/rides/count/g5" , updateG5),
    $.getJSON(BASE_URL + "/rides/count/galveston" , updateGalveston),
    $.getJSON(BASE_URL + "/rides/count/grc" , updateGrc),
    $.getJSON(BASE_URL + "/rides/count/old_mill" , updateOldMill),
    $.getJSON(BASE_URL + "/rides/count/osu_cascades" , updateOsuCascades),
    $.getJSON(BASE_URL + "/rides/count/ten_barrel" , updateTenBarrel),
  ).then(
      makeStationGraph
  );
    
}

function updateColSimpson(data){
    stationColSimpson = data.count;
}
function updateDrakePark(data){
    stationDrakePark = data.count;
}
function updateG5(data){
    stationG5 = data.count;
}
function updateGalveston(data){
    stationGalveston = data.count
}
function updateGrc(data){
    stationGrc = data.count;
}
function updateOldMill(data){
    stationOldMill = data.count;
}
function updateOsuCascades(data){
    stationOsuCascades = data.count;
}
function updateTenBarrel(data){
    stationTenBarrel = data.count;
}

function makeStationGraph() {
    var ctx = document.getElementById("polarChart");
    var polarChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ["Comlumbia Simpson", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [stationColSimpson, 9, 3, 5, 2, 3],
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
