/*------------------------------- ALERT ----------------------------------------*/
const alert = document.querySelector('#alert-button')
const bell = document.querySelector('.notifications')
const notificationSignal = document.querySelector('.notification-signal')


document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropDownButton && e.target.closest('[data-dropdown]') != null) return 
        //  console.log('The value for isDropDownButton is:', isDropDownButton,'1')         
    
    let isDropDown
    if (isDropDownButton) {
        isDropDown = e.target.closest('[data-dropdown]')
        isDropDown.classList.toggle('active')
        alert.style.paddingBottom = '85px'
        alert.style.transition = '.2s ease-in-out'
            // console.log(isDropDown, '2')

        if (!isDropDown.classList.contains('active')) {
            alert.style.paddingBottom = 'initial'
            alert.style.transition = '.2s ease-in-out'
            // console.log('alert button was clicked while dropdown menu was open - sets the page back to its initial layout')
        }
    } 
    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === isDropDown) return
            dropdown.classList.remove('active')
            alert.style.paddingBottom = 'initial'
            alert.style.transition = '.2s ease-in-out'
            // console.log('dropdown is removed 3')
    })    
})

const closeAlert = document.querySelector('.close-alert').addEventListener('click', e => {
    if (e.target.classList.contains('close-alert')) {
        alert.style.display = 'none'
        //console.log('alert was closed')
    }
})

let inbox = [...document.querySelectorAll('.message-received')];
for (let i = 0; i < inbox.length; i++) {
    inbox[i].addEventListener("click", (e) => {
    e.target.classList.add('read')
    // console.log(e.target, 'read class applied');

        const checkClass = (message) => message.classList.contains('read')
        if (inbox.every(checkClass)) {
            notificationSignal.style.display = 'none'
            // console.log('all message have a class of 'read'')
        }
    })
}

//===========================================================
// ALTERNATIVE CODE TO every() method ^^
// let readMessages = [...document.querySelectorAll('.read')]
// if (readMessages.length === inbox.length) {
//     notificationSignal.style.display = 'none'
// }
//===========================================================

bell.addEventListener('click', e => {
    if (alert.style.display = 'none') {
        alert.style.display = 'block'
        //console.log('the alert button appears')
    }
})

/*-----------------------------------------------------------------------------*/

/*------------------------ TRAFFIC NAVIGATION ---------------------------------*/
// the 'options 'variable selects all label elements 
// the 'slider' variable selects the span element

/*  sliderStyles function: 
    the 'labelWidth' variable - retrieves the width of the label element and sets 
    that number as its value.
    --- NOTE: it doesn't matter what index value of the four
        labels are chosen because it is setting the same size for each of them. 
        this variable stores the width as its value ---

// the second line of css converts the value of 'labelWidth' into pixels - 
   setting the width of the slider.

// the index value of options is set to 0 so the the first label is highlighted/selected.
   it is value positioned left is based on the value of its offsetLeft property 

        NOTE:
        element.getBoundingClientRect method returns a DOMRec object providing information about the 
        size of an element and its position relative to the viewport.
*/

/*  options array: for each selection (label) 
    the position variable retrieves information about the size of the element selected and 
    stores that information as its value - setting the size of the slider as much as there is space for the element.
*/

/*  the left variable retrieves the x coordinate by using destructuring syntax - setting the slider in position
    this makes it possible for the slider to go where the user clicks of it to go out of the four options.
*/

const options = [...document.querySelectorAll('.slider-label')]
const slider = document.querySelector('.slider')

const sliderStyles = () => {
  const labelWidth = options[0].clientWidth;
  slider.style.width = `${labelWidth}px`;
  slider.style.left = `${options[0].getBoundingClientRect().left}px`
//   console.log('labelWidth:', labelWidth)
//   console.log('options:', options)
//   console.log('SliderWidth:', slider.style.width = `${labelWidth}px`)
//   console.log('SliderLeft:',slider.style.left = `${options[0].getBoundingClientRect().left}px`)
}

window.addEventListener('load', sliderStyles)
window.addEventListener('resize', sliderStyles)

options.forEach(selection => {
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
        aspectRatio: 1.9,
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
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
        //   borderWidth: 1,
          hoverOffset: 4,
    }]
}

const mobileOptions = {
    type: 'doughnut',
    data: mobileData,
    options: {
        aspectRatio: 1.9,
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