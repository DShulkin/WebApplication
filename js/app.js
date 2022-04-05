
const traffic = document.querySelector('#traffic-chart').getContext('2d')

const labels = [
'16-22',
'23-29', 
'30-5', 
'6-12', 
'13-19', 
'20-26', 
'27-3', 
'4-10', 
'11-17', 
'18-24', 
'25-31'
]

const data = {
    labels, 
    datasets: [{
        data:[750, 1200, 1000, 2000, 1500, 1750, 800, 1900, 2250, 1500, 2500],
        fill: true,
        backgroundColor: ["rgba(116, 119, 191, 0.3)"],
        borderColor: ["rgba(116, 119, 191, 1)"],
        borderWidth: 1,
    },
    ],
}

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    }
}

const lineChart = new Chart(traffic, config)






// const labels = [
//     '16-22',
//     '23-29', 
//     '30-5', 
//     '6-12', 
//     '13-19', 
//     '20-26', 
//     '27-3', 
//     '4-10', 
//     '11-17', 
//     '18-24', 
//     '25-31'
//     ]

// const data = {
//     labels: labels,
//     datasets: [{
//     label: '',
//     backgroundColor: 'rgb(255, 99, 132)',
//     borderColor: 'rgb(255, 99, 132)',
//             data: [750, 1200, 1000, 2000, 1500, 1750, 800, 1900, 2250, 1500, 2500],

//     }]
// };

// const config = {
//     type: 'line',
//     data: data,
//     options: {
//       responsive: true
//     }
//   };

//   const myChart = new Chart(
//     document.getElementById('traffic-chart'),
//     config
//   );