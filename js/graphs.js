var graphData = {
    SyrianRefugees: "",
    received: false
}

var placeData = function(location, data) {
    graphData[location] = data;
}

var loadInternationalGraph = function() {
    var ctx = document.getElementById('internationalChart').getContext('2d');
    var years = [];
    var displacement = [];
    var refugees = [];
    for (var i = 0; i < amCharts.length; i++) {
        years.push(amCharts[i].year);
        displacement.push(amCharts[i].stock_displacement);
        refugees.push(amCharts[i].refugees);
    }
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years,
            datasets: [{
                label: "Refugees",
                data: refugees,
                backgroundColor:'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgb(54, 162, 235)'
            }, {
                label: "Internally Displaced Persons",
                data: displacement,
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgb(255, 159, 64)'
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

var loadDistributionGraph = function() {
    
    var countries = [ "Turkey","Lebanon","Jordan","Iraq","Egypt"];
    var people = [3300000, 1500000, 655000, 246000, 126000];
    var ctx = document.getElementById('distribChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: countries,
            datasets: [{
                data: people,
                backgroundColor: [
                    'rgb(54, 162, 235)',
                    'rgb(255, 159, 64)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 99, 132)',
                ],
            }],
            
        }
    });
}

var loadEuropeGraph = function() {

    var years = [];
    var people = [256155, 297175, 284985, 341795, 373550, 464505, 662165, 1393875, 1291785, 728470];

    for (var i = 2008; i < 2018; i++) {
        years.push(i);
    }
    var ctx = document.getElementById('europeChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: years,
            datasets: [{
                label: "Registered Refugees",
                data: people,
                backgroundColor: 'rgb(75, 192, 192)',
            }],
            
        }
    });
}

