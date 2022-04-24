/*-------------------------- BELL CLICK EVENT -----------------------------------*/
// const bell = document.querySelector('.notification-button')
// const notificationSignal = document.querySelector('.notification-signal')
// const dropDown = document.querySelector('.dropDown')
// bell.addEventListener("click", () => {
//     dropDown.insertAdjacentHTML('afterend',
//         `<ul class="dropDown-menu active"> 
//             <li class="message"><h3>Welcome</h3></li>
//             <li class="message"><h3>Getting Started</h3></li>
//         </ul>`
//     )

//     const dropDownMenu = document.querySelector('.dropDown-menu')
//     notificationSignal.style.display = 'none';
//     dropDown.style.position = 'relative'
//     dropDown.style.border = '1px solid red'
//     dropDown.style.position = 'absolute'
//     dropDownMenu.style.left = '0'
//     dropDownMenu.style.top = 'calc(100% + .25rem)'
//     dropDownMenu.style.backgroundColor = '#fff'
//     dropDownMenu.style.borderRadius = '.25rem'
//     dropDownMenu.style.boxShadow = '0 2px 5px rgba(0, 0, 0, .1)'
//     // dropDownMenu.style.opacity = '0'
//     dropDownMenu.style.transition = 'opacity 150ms ease-in-out'
//     // dropDownMenu.active.style.opacity = '1'    
// })
/*-----------------------------------------------------------------------------*/
const bell = document.querySelector('.notification-button')
const notificationSignal = document.querySelector('.notification-signal')

/*------------------------------- ALERT ----------------------------------------*/
const alertBanner = document.querySelector('#alert-banner')
alertBanner.innerHTML = 
   `<p>
        <strong>Alert:</strong> You have unread messages.
        <button class="close-button" aria-label='close alert' type='button'>x</button>
    </p>`

const dropDown = document.querySelector('.dropDown')
alertBanner.addEventListener('click', e => {
    alertBanner.style.background = 'red' //DELETE LATER
    const showMessages = e.target
    if(showMessages.classList.contains('.alert-banner')) {
        dropDown.style.display = 'block'
    }
})

const closeAlert = document.querySelector('.close-button').addEventListener('click', e => {
    const removeAlert = e.target
    if(removeAlert.classList.contains('close-button')) {
        alertBanner.style.display = 'none'
    }
})

// alertBanner.addEventListener("click", () => {
    
// }
//     dropDown.style.position = 'relative'



/*-----------------------------------------------------------------------------*/


/*------------------------ TRAFFIC NAVIGATION ---------------------------------*/

// the 'options 'variable selects all label elements 
// the 'slider' variable selects the span element

/*  sliderStyles function: 
    the 'labelWidth' variable - retrieves the width/clientWidth of the label element and sets 
    the number as its value.
    --- NOTE: it doesn't matter what index value of the four
        labels are chosen because it is setting a universal size for each of them. 
        this variable stores the width as its value ---

// the first line of css converts the value of 'labelWidth' into pixels - 
   setting the width of the slider.

// the index value of options is set to 0 so the the first label is highlighted/selected.
   it is value positioned left is based on the value of its offsetLeft property 

        NOTE:
        element.getBoundingClientRect method returns a DOMRec object providing information about the 
        size of an element and its position relative to the viewport.
*/


// Array.from: for each selection (label) 
/* the position variable retrieves information about the size of the element selected and 
   stores that information as its value
*/
// the left variable retrieves the x coordinate 

const options = document.querySelectorAll('.slider-label')
const slider = document.querySelector('.slider')

const sliderStyles = () => {
  const labelWidth = options[0].clientWidth;
  slider.style.width = `${labelWidth}px`;
  slider.style.left = `${options[0].getBoundingClientRect().left}px`
  console.log('labelWidth:', labelWidth)
  console.log( 'options:', options)
  console.log(  'SliderWidth:', slider.style.width = `${labelWidth}px`)
  console.log(  'SliderLeft:',slider.style.left = `${options[0].getBoundingClientRect().left}px`)
}

window.addEventListener('load', sliderStyles)
window.addEventListener('resize', sliderStyles)

Array.from(options).forEach(selection => {
  selection.addEventListener('click', (label) => {
    const position = selection.getBoundingClientRect()
    const { left } = position
    slider.style.left = left + 'px'
    // console.log('position:',position)
    // console.log('left:',left)
  })
})

/*------------------------------------------------------------------------*/


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

const mobileCanvas = document.querySelector('#doughnut-chart').getContext('2d')

const mobileData = {
    labels: ['Desktop', 'Tablet', 'Mobile'],
    datasets: [{
        label: 'Mobile Users',
        data: [300, 100, 100],
        background: '#7477BF',
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        borderWidth: 1,
    }]
}

const mobileOptions = {
    type: 'doughnut',
    data: mobileData,
    aspectRatio: 1.9,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontStyle: 'bold'
                }
            }
        }
    }
}

const mobileChart = new Chart(mobileCanvas, mobileOptions)

/*------------------------------------------------------------------------*/
