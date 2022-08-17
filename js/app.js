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
        //console.log('alert button appears')
    }
})

/*-----------------------------------------------------------------------------*/

/*------------------------ TRAFFIC CHART ---------------------------------*/
const labels = document.querySelectorAll('.traffic-nav label') 

const dataArray = [   
    [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    [300, 500, 2500, 1050, 1850, 1500, 750, 2250, 1250, 2000, 2500],     
    [1000, 300, 500, 950, 1150, 1300, 1400, 2000, 2500, 700, 2000],
    [1500, 1400, 1050, 950, 1200, 2500, 750, 850, 1050, 900, 300]
]

const trafficCanvas = document.querySelector('#traffic-chart').getContext('2d')
const trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label:'Traffic',
        data: dataArray[0],
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

const trafficOption = {
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

for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', () => {
        // console.log(labels[i], 'this label was clicked')
        if (labels[i] === labels[i]) {
            trafficChart.data.datasets[0].data = dataArray[i];
            // console.log(dataArray[i])
            // console.log(labels[i] === labels[i])
        }
        trafficChart.update()
    })
}

let trafficChart = new Chart(trafficCanvas, trafficOption)
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

/*--------------- AUTOCOMPLETE SEARCH USER FILTER ------------------------*/
let userNames = [
    'Victoria Chambers',
    'Dayle Byrd',
    'Dawn Wood',
    'Dan Oliver'
]

const input = document.querySelector('.search-user')
const list = document.createElement('ul')

input.addEventListener('keyup', (e) => {
    document.body.onkeyup = function(e) {
        if (e.key == " "  || e.key == 32 || e.code == "Space") {
            list.remove() 
            }
        }
    list.classList.add('list')
    insertAfter(list, input)
    removeElements()
    for (let i of userNames) {
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ' ') {
            let listItem = document.createElement('li')
            listItem.classList.add('list-item')
            listItem.style.cursor = 'pointer'   
            listItem.style.padding = '10px 15px 10px 15px'
            listItem.setAttribute("onclick", "displayNames('" + i + "')")
        
            let word = "<b>" + i.substring(0, input.value.length) + "</b>"
            word += i.substring(input.value.length)  
        
            listItem.innerHTML = word
            list.appendChild(listItem)

            if (input.value.length == 0 || input.value == ' '  ) {
                list.remove()
            }
        }
    }
})

const insertAfter = (newNode, existingNode) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const displayNames = (value) => {
    input.value = value
    removeElements()
}

const removeElements = () => {
    let items = document.querySelectorAll('.list-item')
    items.forEach((item) => {
        item.remove()
    })
}
/*-----------------------------------------------------------------------*/

/*---------------------- MESSAGING SYSTEM -------------------------------*/
const send = document.querySelector('#send')
const message = document.querySelector('#messageField')
const user = document.querySelector('#userField')

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
           window.alert("Please fill out user and message fields before sending")
        } else if (user.value === "" ) {
            window.alert("Please fill out user field before sending")
        } else if (message.value === "" ) {
            window.alert("Please fill out message field before sending")
        } else {
            window.alert(`Message successfully sent to: ${user.value}`)
        }
})
// /*-----------------------------------------------------------------------*/

// /*------------------------ LOCAL STORAGE --------------------------------*/
const public = document.querySelector('.public');
const email = document.querySelector('.email');
const timezone = document.querySelector('.timezone');
const save = document.querySelector('.settings-buttons #save');
const clear = document.querySelector('.settings-buttons #cancel');

save.addEventListener('click', () => {
    localStorage.setItem('email', email.checked)
    localStorage.setItem('public', public.checked)
    localStorage.setItem('timezone', timezone.value)
})

clear.addEventListener('click', () => {
    localStorage.removeItem('email', email.checked)
    localStorage.removeItem('public', public.checked)
    localStorage.removeItem('timezone', timezone.value)
    email.checked = null
    public.checked = null
    timezone.value = 'Select a Timezone'
})
 
const storage = () => {
    if (localStorage.email === "true") {
      email.checked = true;
    } else {
      email.checked = false;
    }
    if (localStorage.public === "true") {
      public.checked = true;
    } else {
      public.checked = false;
    }
    if (localStorage.timezone) {
      timezone.value = localStorage.timezone;
    }
  };

storage();
/*-----------------------------------------------------------------------*/

































/*------------------------ TRAFFIC NAVIGATION CODE NOT IN USE FOR THIS PROJECT---------------------------------*/
    // <!-- <section class="settings">
    // <h3>Settings</h3> -->
    // <!--SLIDER BUTTONS-->
    //     <!-- <form class="test">
    //         <div class="settings-label">
    //             <input type="checkbox" id="email">
    //             <div class="rounded-slider"></div>
    //             <label class="settings-label" for="email" name="receive-email">
    //                 Send Email Notifications
    //             </label>
    //         </div>
        
    //         <div class="settings-label">
    //             <input type="checkbox" id="public-profile">
    //             <div class="rounded-slider"></div>
    //             <label class="settings-label" for="public-profile" name="public-profile">
    //                 Set Profile To Public
    //             </label>
    //         </div> -->
    // <!--SLIDER BUTTONS-->
    //         <!-- <div class="timezone">
    //             <select>
    //                 <option disabled selected>Select a Timezone</option>
    //                 <option>Atlantic Standard</option>
    //                 <option>Eastern Standard</option>
    //                 <option>Central Standard</option>
    //                 <option>Mountain Standard</option>
    //             </select>
    //             <div class="arrow"></div>
    //         </div>

    //         <div class="settings-buttons">
    //             <button id="save">Save</button>
    //             <button id="cancel">Cancel</button>
    //         </div>
    //     </form>
    // </section> -->
    
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

/*  the left variable retrieves the x coordinate using destructuring syntax - setting the slider in position
    this makes it possible for the slider to go where the user clicks of it to go out of the four options.
*/

// const options = [...document.querySelectorAll('.slider-label')]
// const slider = document.querySelector('.slider')

// const sliderStyles = () => {
//   const labelWidth = options[0].clientWidth;
//   slider.style.width = `${labelWidth}px`;
//   slider.style.left = `${options[0].getBoundingClientRect().left}px`

    //   console.log('labelWidth:', labelWidth)
    //   console.log('options:', options)
    //   console.log('SliderWidth:', slider.style.width = `${labelWidth}px`)
    //   console.log('SliderLeft:',slider.style.left = `${options[0].getBoundingClientRect().left}px`)

// }

// window.addEventListener('load', sliderStyles)
// window.addEventListener('resize', sliderStyles)

// options.forEach(selection => {
//   selection.addEventListener('click', (label) => {
//     const position = selection.getBoundingClientRect()
//     const { left } = position

//     slider.style.left = left + 'px'
    // console.log('position:',position)
    // console.log('left:',left)

//   })
// })

// const labels = [...document.querySelectorAll('.traffic-nav label')] //ARRAY LIST
    

// console.log(existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling))

/*------------------------------------------------------------------------*/



/////DOESN'T WORK/////
// const settingsButtons = document.querySelector('.settings-buttons').children
// const settings = document.querySelectorAll('.settingsForm input')
// const timezone = document.querySelector('.timezone');

// for (let i = 0; i < settings.length; i++) {

//     settingsButtons[i].addEventListener('click', () => {
//         localStorage.setItem('settings', settings[i].checked)
//         localStorage.setItem('timezone', timezone.value)
//     })

//     settingsButtons[i].addEventListener('click', () => {
//         localStorage.removeItem('settings', settings[i].checked)
//         localStorage.removeItem('timezone', timezone.value)
//         settings[i].checked = null
//         timezone.value = 'Select a Timezone'
//     })
    
//     const storage = () => {
//         if (localStorage.settings[i] === "true") {
//             settings[i].checked = true;
//         } else {
//             settings[i].checked = false;
//         }

//         if (localStorage.timezone) {
//         timezone.value = localStorage.timezone;
//         }
//   }
// storage()
//
