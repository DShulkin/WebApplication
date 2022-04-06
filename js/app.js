/*------------------------ TRAFFIC CHART ---------------------------------*/

const trafficCanvas = document.querySelector('#traffic-chart').getContext('2d')
const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label:'Traffic',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        fill: true,
        aspectRatio: 2.5,
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: ['rgba(116, 119, 191, 1)'],
        borderWidth: 1,
        animation: {
            tension: {
                duration: 3200,
                easing: 'linear',
                from:1,
                to:0,
                loop: true
            }
        }
    }] 
};

const trafficOptions = {
    type: 'line',
    data: trafficData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
}


const trafficChart = new Chart(trafficCanvas, trafficOptions)

/*------------------------------------------------------------------------*/


/*------------------------ DAILY TRAFFIC ---------------------------------*/
const dailyCanvas = document.querySelector('#bar-chart').getContext('2d')

const dailyData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: '# of hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        background: '#7477BF',
        backgroundColor: ['rgba(116, 119, 191, 1)'],
        borderWidth: 1,
    }]
}

const dailyOptions = {
    type: 'bar',
    data: dailyData,
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
}

const barChart = new Chart(dailyCanvas, dailyOptions)

/*------------------------------------------------------------------------*/



/*------------------------ MOBILE USERS ---------------------------------*/

/*------------------------------------------------------------------------*/



