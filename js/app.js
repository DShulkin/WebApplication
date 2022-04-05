const trafficCanvas = document.querySelector('#traffic-chart').getContext('2d')
const data = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        fill: true,
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: ['rgba(116, 119, 191, 1)'],
        borderWidth: 1,
    }]
};


const trafficOptions = {
    data,
    type: 'line',
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

const lineChart = new Chart(trafficCanvas, trafficOptions)






