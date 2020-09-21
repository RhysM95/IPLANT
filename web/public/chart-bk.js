
$('#navbar').load('navbar.html');
$('#footer').load('footer.html');
/*
const MQTT_URL = 'http://localhost:5001/system-control';
const API_URL = 'http://localhost:5000/api';

const currentUser = localStorage.getItem('name');

if(currentUser == "admin")
{
    $.get(`${API_URL}/plants`).then(response =>
    {
        response.forEach(plant =>
        {
            $('#plants tbody').append(`<tr>
            <td>${plant.user}</td>
            <td>${plant.name}</td>
            <td>${plant.temp + '°'}</td>
            <td>${plant.light + ' LUX'}</td>
            <td>${plant.humidity + ' %RH'}</td>
            <td>${plant.moisture + ' MU'}</td>
            </tr>`);});
    }).catch(error =>
    {
        console.error(`Error: ${error}`);
    });
}
else if (currentUser)
{
    $.get(`${API_URL}/users/${currentUser}/plants`).then(response => 
    {
        response.forEach((plant) => 
        {
            $('#plants tbody').append(`
            <tr data-plant-id=${plant._id}>
            <td>${plant.user}</td>
            <td>${plant.name}</td>
            <td>${plant.temp + '°'}</td>
            <td>${plant.light + ' LUX'}</td>
            <td>${plant.humidity + ' %RH'}</td>
            <td>${plant.moisture + ' MU'}</td>
            </tr>`);
        });
        
    }).catch(error => 
    {
        console.error(`Error: ${error}`);
    });
}
else 
{
    const path = window.location.pathname;
    if (path !== '/login' && path !== '/registration') 
    {
        location.href = '/login';
    }
}

/* chart.js chart examples **
var cv = $("#chLine").get(0).getContext("2d");

var mychart = new Chart(cv).Line(data);
// chart colors


var chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            label: "Plant 1",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,0.1)",
            pointColor: "rgba(220,220,220,0.1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pintHighlightStroke: "rgba(220,220,220,0.1)",
            data: [65, 59, 80, 81, 56, 55, 40],
            
        },
        {
            label: "Plant 2",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,0.1)",
            pointColor: "rgba(151,187,205,0.1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pintHighlightStroke: "rgba(151,187,2050.1)",
            data: [28, 48, 40, 19, 86, 27, 90],
        }
    ]
};

*/